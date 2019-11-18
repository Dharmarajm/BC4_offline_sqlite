import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Autostart } from '@ionic-native/autostart/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

//import * as drilldown from 'highcharts/modules/drilldown.src.js'
// import more from 'highcharts/highcharts-more.src';
// import exporting from 'highcharts/modules/exporting.src.js';


import { CoreModule } from './core/core.module'; 

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TermsConditionsPage } from './login/terms-conditions/terms-conditions.page';
import { AboutPage } from './login/about/about.page';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from './network-connectivity/network-service';
import { syncProvider } from './sync/sync';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
//import { SwapDirectivesModule } from './swap.directive.module';
//import { SwapDirective } from './swap.directive';
//import * as Hammer from 'hammerjs';
//import { HammerGestureConfig,HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
// SwapDirective
// export class CustomHammerConfig extends HammerGestureConfig{
//   overrides = {
//     'swipe':{
//       direction: Hammer.DIRECTION_ALL
//     }
//   }
// }

// export function highchartsModules() {
//   // apply Highcharts Modules to this array
//   return [ more,exporting ];
// }

@NgModule({
  declarations: [AppComponent,TermsConditionsPage,AboutPage,
    //SwapDirective
  ],
  entryComponents: [TermsConditionsPage,AboutPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    HttpClientModule,
    //SwapDirectivesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    //BackgroundMode,
    Autostart,
    ScreenOrientation,
    LocalNotifications,
    Network,
    NetworkService,
    SQLite,
    FileTransfer,
    syncProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // {provide: highchartsModules,
    //   useFactory: () => [ drilldown]
    //  }
    //{ provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
