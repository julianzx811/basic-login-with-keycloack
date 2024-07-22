import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { environment } from '../environments/environment';
import { KeycloakConfig } from 'keycloak-js';
import { PlatformService } from './services/platform.service';

function initializeKeycloak(keycloak: KeycloakService, platformService: PlatformService) {
  return () => {
    if (platformService.isBrowser()) {
      return keycloak.init({
        config: {
          url: 'http://localhost:8080/',
          realm: 'myrealm',
          clientId: 'yuliancliente'
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
        }
      });
    } else {
      return Promise.resolve();
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, PlatformService],
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
