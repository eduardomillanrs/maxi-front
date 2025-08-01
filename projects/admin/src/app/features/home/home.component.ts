import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';

import { Column, DataTableFilterDirective } from '@admin/app/shared/components/api';
import { DataTableComponent, PageComponent } from '@admin/app/shared/components';
import { events } from '@admin/assets/mocks/events';

export interface Event {
  id: number;
  client: {
    name: string;
  };
  executive: {
    name: string;
  };
  coordinator: {
    name: string;
  };
  type: {
    name: string;
  };
  banquet: {
    name: string;
  };
  eventDate: Date;
  adultsCount: number;
  youngCount: number;
  childrenCount: number;
  pricePerAdult: number;
  pricePerChild: number;
  total: number;
  isPaid: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    DatePickerModule,
    FloatLabelModule,
    MultiSelectModule,
    DataTableComponent,
    DataTableFilterDirective,
    PageComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected readonly events = events;
  protected readonly columns = [
    { field: 'client.name', header: 'Cliente' },
    { field: 'executive.name', header: 'Ejecutivo', filter: 'custom' },
    { field: 'coordinator.name', header: 'Coordinador', filter: 'custom' },
    { field: 'type.name', header: 'Tipo de evento' },
    { field: 'banquet.name', header: 'Banquete', filter: false },
    { field: 'eventDate', header: 'Fecha de evento', type: 'date' },
    { field: 'adultsCount', header: '# de adultos', type: 'numeric', digits: 0 },
    { field: 'youngCount', header: '# de jovenes', hidden: true, type: 'numeric', digits: 0 },
    { field: 'childrenCount', header: '# de niños', hidden: true, type: 'numeric', digits: 0 },
    { field: 'pricePerAdult', header: 'Precio por adulto', type: 'numeric', style: 'currency' },
    { field: 'pricePerChild', header: 'Precio por niño', hidden: true, type: 'numeric', style: 'currency' },
    { field: 'total', header: 'Total', type: 'numeric', style: 'currency' },
    { field: 'isPaid', header: 'Pagado', export: '¿Está pagado?', type: 'boolean' },
    { field: 'createdAt', header: 'Fecha de creación', hidden: true, type: 'date' },
  ] as Column[];
  protected readonly executives = this.events.map((event) => event.executive);
  protected readonly coordinators = this.events.map((event) => event.coordinator);
}
