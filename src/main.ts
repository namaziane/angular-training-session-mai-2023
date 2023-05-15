import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormationManagerModule } from './app/formation-session-mai.module';



platformBrowserDynamic().bootstrapModule(FormationManagerModule).catch(err => console.error(err));
