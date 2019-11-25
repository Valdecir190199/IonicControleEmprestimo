import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Importando Firebase
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDHImdKHwDx3TxKJWm4arUDeTQoqqCDKsc",
      authDomain: "controle-e4fdb.firebaseapp.com",
      databaseURL: "https://controle-e4fdb.firebaseio.com",
      projectId: "controle-e4fdb",
      storageBucket: "controle-e4fdb.appspot.com",
      messagingSenderId: "610851266722",
      appId: "1:610851266722:web:57989df61b892bef9bf7fb",
      measurementId: "G-QM79X93C98"
    })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
