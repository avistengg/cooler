import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { ProductsPage } from '../pages/products/products';
import { ProductdetailsPage } from '../pages/productdetails/productdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	RegisterPage,
	LoginPage,
	ForgotpassPage,
	ProductdetailsPage,
	ProductsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	RegisterPage,
	LoginPage,
	ForgotpassPage,
	ProductdetailsPage,
	ProductsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
