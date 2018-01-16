import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 

@IonicPage()
@Component({
  selector: 'page-dealership',
  templateUrl: 'dealership.html',
})
export class DealershipPage {
  pincode: AbstractControl;
  name: AbstractControl;
  address: AbstractControl; 
  city: AbstractControl;
  company:AbstractControl;
  intersetin:AbstractControl;
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
      pincode:['',Validators.required], 
      city:['',[Validators.required]], 
      company:['',[Validators.required]],
      intersetin:['',[Validators.required]],
      });

      this.name = this.formgroup.controls['name'];
      this.address = this.formgroup.controls['address'];
      this.pincode = this.formgroup.controls['pincode']; 
      this.city = this.formgroup.controls['city'];  
      this.company = this.formgroup.controls['company']; 
      this.intersetin = this.formgroup.controls['intersetin']; 
      //console.log(this.userdata);
      // this.email=this.userdata.email;
      // this.email=this.userdata.email;
  }
  onDealer(form:NgForm){
    const loading = this.loadingCtrl.create({
      content:"In process...."
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
