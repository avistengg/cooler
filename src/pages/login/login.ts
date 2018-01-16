import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Header, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'; 
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl, NgForm} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  submitAttempt: boolean;
  password: AbstractControl;
  email: AbstractControl;
  
  cookieValue: string;
  formgroup:FormGroup;
 constructor(private http : HttpClient,
  public cookieService:CookieService,
  public formbuilder:FormBuilder,
  public navCtrl: NavController,
  private loadingCtrl: LoadingController,
  private alertCtrl: AlertController,
  public storage:Storage
){  
  this.formgroup= formbuilder.group({
                    email:['',[Validators.required,Validators.email]],
                    password:['',Validators.required],
      });
      
      this.email = this.formgroup.controls['email'];
      this.password = this.formgroup.controls['password'];
      if(localStorage.getItem('token')){
        this.navCtrl.setRoot(HomePage);
      }
      
 } 
 registerpage = RegisterPage;
  onGoToRegiter(name:string) { 
    	  this.navCtrl.push(RegisterPage, {userName: name});
      }
  getMeIn(form:NgForm){
    const loading = this.loadingCtrl.create({
      content:"Signing you up...."
    });

      loading.present();
         var apiurl="http://clarioncoolers.com/api/users/user_login?email="+form.value.email+"&password="+form.value.password+"&device_type=Android&device_token=464846SFSFHGHmg62vx6cs65f5sfsr5aQWWedddf";
         var headers = new HttpHeaders();
        // console.log(form.value.username);
         let user= ""; 
         headers.append('Content-Type','application/x-www-form-urlencoded');
         this.http.post(apiurl,user,{headers:headers}).subscribe(data=>{    
          if(data){
            // console.log(data);
             if(data['status']==1 && data['status']){
              //loading.dismiss(); 
              localStorage.setItem('token',data['email']);
              localStorage.setItem('userdata',JSON.stringify(data));  
              loading.dismiss(); 
            //   const alert = this.alertCtrl.create({
            //     title:'Signin Successfully',
            //     message:data['message'],
            //     buttons:['Ok']
            //   }); 
            //  alert.present(); 
              this.navCtrl.setRoot(HomePage);
             }else{
              loading.dismiss(); 
              const alert = this.alertCtrl.create({
                title:'Signin Failed',
                message:data['message'],
                buttons:['Ok']
              }); 
             alert.present(); 
             }
          }
       });
  }   
}