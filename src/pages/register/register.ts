import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  password: AbstractControl;
  name: AbstractControl;
  address: AbstractControl; 
  mobile_number: AbstractControl;
  email: AbstractControl;
 formgroup:FormGroup; 
  constructor(private http : HttpClient,
    public cookieService:CookieService,
    public formbuilder:FormBuilder,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, 
    public menu: MenuController) {
      this.menu.enable(false);
      this.formgroup= formbuilder.group({
        name:['',Validators.required],
        address:['',Validators.required], 
        mobile_number:['',Validators.required], 
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
        });

        this.name = this.formgroup.controls['name'];
        this.address = this.formgroup.controls['address'];
        this.mobile_number = this.formgroup.controls['mobile_number']; 
        this.email = this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password']; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
