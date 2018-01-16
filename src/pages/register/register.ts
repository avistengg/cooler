import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginPage } from '../login/login';

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

   loginpage=LoginPage;
  onSignup(form:NgForm){
    const loading = this.loadingCtrl.create({
      content:"Register in process...."
    });
    var apiurl="http://clarioncoolers.com/api/users/user_register?name="+form.value.name+"&address="+form.value.address+"&mobile_number="+form.value.mobile_number+"&email="+form.value.email+"&password="+form.value.password+"&device_type=Android&device_token=Zzxtyusd88912340toiuttt4346777711jj22k54l38dG&login_with=app";
    var headers = new HttpHeaders();
    // .set('Content-Type','application/x-www-form-urlencoded')
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let user="";      
    this.http.post(apiurl,user,{headers:headers}).subscribe(data=>{ 
      if(data){
        console.log(data);
        if(data['status']==1){
         loading.dismiss();
         const alert = this.alertCtrl.create({
          title:'Registration SuccessFul',
          message:data['message'],
          buttons:['Ok']
        }); 
       alert.present();
       this.navCtrl.push(LoginPage);
        }else{
         loading.dismiss(); 
         const alert = this.alertCtrl.create({
           title:'Registration Failed',
           message:'Email already exists.',
           buttons:['Ok']
         }); 
        alert.present();
        }
     }
    });
  }

}
