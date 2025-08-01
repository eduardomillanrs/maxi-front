import { Column, ColumnType } from '@admin/app/shared/components/data-table/types';

const DEFAULT_COLUMN_CONFIG: Partial<Column> = {
  filter: 'builtin',
  hidden: false,
  reorder: true,
  resize: true,
  sort: true,
} as const;

export const COLUMN_CONFIG: Record<ColumnType, Partial<Column>> = {
  text: DEFAULT_COLUMN_CONFIG,
  numeric: {
    ...DEFAULT_COLUMN_CONFIG,
    style: 'decimal',
    locale: 'es-MX',
    currency: 'MXN',
    digits: 2,
  },
  date: {
    ...DEFAULT_COLUMN_CONFIG,
    locale: 'es-MX',
    timezone: 'America/Mexico_City',
  },
  boolean: DEFAULT_COLUMN_CONFIG,
} as const;
