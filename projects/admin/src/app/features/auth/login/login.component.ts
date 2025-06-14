import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { WithForm } from '@admin/app/shared/types';

interface Form {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    FloatLabelModule,
    FluidModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  protected form: FormGroup<WithForm<Form>> = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: this.fb.control('', [Validators.required, Validators.maxLength(50)]),
  });
}
