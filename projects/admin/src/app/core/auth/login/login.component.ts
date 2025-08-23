import { ThemeService } from '@admin/app/core/theme/theme.service';
import { Component, computed, inject } from '@angular/core';

import { $dt } from '@primeng/themes';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CardModule, CheckboxModule, FloatLabelModule, FluidModule, InputTextModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private themeService = inject(ThemeService);

  protected primaryColor = $dt('primary.color');

  protected logoPath = computed(() => {
    const isDarkMode = this.themeService.isDarkMode();
    return `/images/grupo-maxieventos-${isDarkMode ? 'dark' : 'light'}.png`;
  });
}
