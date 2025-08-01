import { Component, contentChildren, input, model, OnInit, TemplateRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectChangeEvent, MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';

import { AutoMaxHeightDirective } from '@admin/app/shared/directives';
import { COLUMN_CONFIG } from '@admin/app/shared/components/data-table/data-table.config';
import { Column } from '@admin/app/shared/components/data-table/types';
import { SortEvent } from 'primeng/api';
import { SortState } from '@admin/app/shared/components/data-table/enums';
import { isNil, isObject, mergeConfig } from '@admin/app/shared/helpers';
import { DataTableFilterDirective } from '@admin/app/shared/components/data-table/directives/data-table-filter.directive';

const DEFAULT_VALUE = '';

@Component({
  selector: 'app-data-table',
  imports: [
    FormsModule,
    NgTemplateOutlet,
    ButtonModule,
    DividerModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MultiSelectModule,
    TableModule,
    AutoMaxHeightDirective,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent<T extends object> implements OnInit {
  public readonly bordered = input<boolean>(true);
  public readonly columns = input.required<Column[], Column[]>({ transform: this.transformColumns });
  public readonly data = input.required<T[]>();
  public readonly dataKey = input<string>();
  public readonly globalFilterFields = input<string[]>();
  public readonly loading = input<boolean>(false);
  public readonly rowPerPage = input<number>(5);
  public readonly rowsPerPage = input<number[]>([5, 10, 20]);
  public readonly selection = model<T[]>([]);

  protected readonly dt = viewChild.required<Table<T>>('dt');
  protected readonly filterTemplates = contentChildren(DataTableFilterDirective);

  protected cols = [] as Column[];
  protected filters = new Map<string, TemplateRef<unknown>>();
  protected rows = [] as T[];
  protected sortState = SortState.None;

  protected log = console.log;

  public ngOnInit(): void {
    this.cols = this.columns().filter((column) => !column.hidden);
    this.rows = Array.from(this.data());
    this.setupFilters();
  }

  protected get isAllColumnsVisible(): boolean {
    return this.cols.length === this.columns().length;
  }

  protected getValue(row: T, field: string): unknown {
    const keys = field.replace(/\[(\d+)\]/g, '.$1').split('.');
    let data = row;

    for (const key of keys) {
      const value = Object.getOwnPropertyDescriptor(data, key)?.value;

      if (!isObject(value)) {
        return value;
      }

      data = value;
    }

    return DEFAULT_VALUE;
  }

  protected formatValue(value: unknown, column: Column): unknown {
    switch (column.type) {
      case 'text':
        return value;

      case 'numeric':
        return new Intl.NumberFormat(column.locale, {
          style: column.style,
          currency: column.currency,
          minimumFractionDigits: column.minDigits ?? column.digits,
          maximumFractionDigits: column.maxDigits ?? column.digits,
        }).format(Number(value));

      case 'date':
        return Intl.DateTimeFormat(column.locale, { timeZone: column.timezone }).format(value as Date);

      case 'boolean':
        return value;

      default:
        return value;
    }
  }

  protected toggleColumn(event: MultiSelectChangeEvent): void {
    const column: Column | undefined = event.itemValue;

    if (!column) {
      const { checked } = event.originalEvent as unknown as { checked: boolean };
      this.cols = checked ? Array.from(this.columns()) : [];
      return;
    }

    const fields = (event.value as Column[]).map((column) => column.field);
    this.cols = this.columns().filter((column) => fields.includes(column.field));
  }

  protected customSort(event: SortEvent): void {
    switch (this.sortState) {
      case SortState.Asc:
        this.sortState = SortState.Desc;
        this.sort(event);
        break;

      case SortState.Desc:
        this.sortState = SortState.None;
        this.rows = Array.from(this.data());
        this.dt().reset();
        break;

      case SortState.None:
        this.sortState = SortState.Asc;
        this.sort(event);
        break;
    }
  }

  protected filterGlobal(event: Event): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.dt().filterGlobal((event.target as any).value, 'contains');
  }

  private transformColumns(columns: Column[]): Column[] {
    return columns.map((column) => {
      if (!column.export) {
        column.export = column.header;
      }

      if (!column.type) {
        column.type = 'text';
      }

      return mergeConfig(COLUMN_CONFIG[column.type], column) as Column;
    });
  }

  private setupFilters(): void {
    this.filters.clear();

    for (const filter of this.filterTemplates()) {
      this.filters.set(filter.field(), filter.template);
    }
  }

  private sort(event: SortEvent): void {
    event.data?.sort((data1, data2) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value1: any = this.getValue(data1, event.field!);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value2: any = this.getValue(data2, event.field!);
      let order = 0;

      if (isNil(value1) && !isNil(value2)) {
        order = -1;
      } else if (!isNil(value1) && isNil(value2)) {
        order = 1;
      } else if (typeof value1 === 'string') {
        order = value1.localeCompare(value2);
      } else {
        order = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      }

      return event.order! * order;
    });
  }
}
