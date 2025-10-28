import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app';

import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('Application bootstrapped successfully');
  })
  .catch((err) => console.error(err));
