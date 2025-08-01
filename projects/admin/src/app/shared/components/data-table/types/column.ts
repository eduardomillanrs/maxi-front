type Locale = 'en-US' | 'es-MX';
type Currency = 'USD' | 'MXN';
type Timezone = 'America/Mexico_City' | 'America/New_York';

interface BaseColumn {
  field: string;
  header: string;
  export?: string;
  filter?: false | 'builtin' | 'custom';
  hidden?: boolean;
  reorder?: boolean;
  resize?: boolean;
  sort?: boolean;
}

interface TextColumn extends BaseColumn {
  type?: 'text';
}

interface NumericColumn extends BaseColumn {
  type?: 'numeric';
  style?: 'decimal' | 'currency' | 'percent';
  locale?: Locale;
  currency?: Currency;
  digits?: number;
  minDigits?: number;
  maxDigits?: number;
}

interface DateColumn extends BaseColumn {
  type?: 'date';
  locale?: Locale;
  timezone?: Timezone;
}

interface BooleanColumn extends BaseColumn {
  type?: 'boolean';
}

export type Column = TextColumn | NumericColumn | DateColumn | BooleanColumn;
export type ColumnType = NonNullable<Column['type']>;
