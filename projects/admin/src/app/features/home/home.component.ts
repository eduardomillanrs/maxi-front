import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';

import { PageComponent } from '@admin/app/shared/components';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, DatePickerModule, FloatLabelModule, PageComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
