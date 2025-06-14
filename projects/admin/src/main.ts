import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '@admin/app/app.component';
import { appConfig } from '@admin/app/app.config';

async function bootstrap() {
  try {
    bootstrapApplication(AppComponent, appConfig);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
