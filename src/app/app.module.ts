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
import { LogoutPage } from '../pages/logout/logout';

import { CfmcalPage } from '../pages/cfmcal/cfmcal';
import { WarpolicyPage } from '../pages/warpolicy/warpolicy';
import { DistributorPage } from '../pages/distributor/distributor';
import { ReturnPage } from '../pages/return/return';
import { TermsPage } from '../pages/terms/terms';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { DealershipPage } from '../pages/dealership/dealership';
import { PastorderPage } from '../pages/pastorder/pastorder';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
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
  LogoutPage,
  CfmcalPage,
  WarpolicyPage,
  DistributorPage,
  ReturnPage,
  TermsPage,
  MyprofilePage,
  DealershipPage,
  PastorderPage,
  ChangepasswordPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
  LogoutPage,
  CfmcalPage,
  WarpolicyPage,
  DistributorPage,
  ReturnPage,
  TermsPage,
  MyprofilePage,
  DealershipPage,
  PastorderPage,
  ChangepasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
