import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormationManagerModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(FormationManagerModule).catch(err => console.error(err));
