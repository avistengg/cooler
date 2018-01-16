import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { ProductsPage } from '../pages/products/products';
import { ProductdetailsPage } from '../pages/productdetails/productdetails';
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
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'CFM Calculartor', component: CfmcalPage }, 
      { title: 'Dealership Query', component: DealershipPage },
      { title: 'Past Orders', component: PastorderPage },  
      { title: 'My Profile', component: MyprofilePage },
      { title: 'Change Password', component: ChangepasswordPage },
      { title: 'Terms & Conditions', component: TermsPage },
      { title: 'Return & Refund Policy', component: ReturnPage },
      { title: 'Distributor Policy', component: DistributorPage },
      { title: 'Warranty Policy', component: WarpolicyPage },
      { title: 'Logout', component: LogoutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
