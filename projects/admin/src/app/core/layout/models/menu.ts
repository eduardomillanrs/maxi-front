import { PrimeIcons } from 'primeng/api';

export interface Menu {
  id: number;
  name: string;
  route: string | null;
  icon?: PrimeIcons | null;
  isActive: boolean;
  submenus?: Menu[];
}
