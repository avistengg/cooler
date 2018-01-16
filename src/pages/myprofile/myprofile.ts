import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  emailx: any;
  namex: any;
  userdata: any;
  mobilenumber: AbstractControl;
  name: AbstractControl;
  address: AbstractControl; 
  email: AbstractControl;
 formgroup:FormGroup; 
  constructor(private http : HttpClient,
    public cookieService:CookieService,
    public formbuilder:FormBuilder,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, 
    public menu: MenuController) {
    this.formgroup= formbuilder.group({
      name:['',Validators.required],
      address:['',Validators.required], 
      mobilenumber:['',Validators.required], 
      email:['',[Validators.required,Validators.email]], 
      });

      this.name = this.formgroup.controls['name'];
      this.address = this.formgroup.controls['address'];
      this.mobilenumber = this.formgroup.controls['mobilenumber']; 
      this.email = this.formgroup.controls['email']; 
      this.userdata= JSON.parse(localStorage.getItem('userdata'));
      this.namex=this.userdata.name;
      this.emailx=this.userdata.email;
      //console.log(this.userdata);
      // this.email=this.userdata.email;
      // this.email=this.userdata.email;
  }
  onSignup(form:NgForm){
    const loading = this.loadingCtrl.create({
      content:"Updation in process...."
    });
     
         loading.dismiss();
         const alert = this.alertCtrl.create({
          title:'Updation SuccessFul',
          message:"",
          buttons:['Ok']
        }); 
       alert.present();
    
  }

}
