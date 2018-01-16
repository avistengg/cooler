import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage'; 
import { ProductdetailsPage } from '../productdetails/productdetails';
import { ProductsPage } from '../products/products';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coolers1: any;
  coolers: any;
  pet: string;
  formgroup:FormGroup; 

  constructor(private http : HttpClient, public navCtrl: NavController, public navParams: NavParams) {
this.pet = "kittens";
var apiurl="http://clarioncoolers.com/api/users/get_product_list_by_cat?user_id=1&cat=domestic";
var headers = new HttpHeaders();    
let datax= "";
headers.append('Content-Type','application/x-www-form-urlencoded');
this.http.post(apiurl,datax,{headers:headers}).subscribe(data=>{    
    if(data){ 
        if(data['status']==1 && data['status']){
          this.coolers=data['data'];  
          console.log(this.coolers);  
        }else{
        }
      }
  });

  var apiurl="http://clarioncoolers.com/api/users/get_product_list_by_cat?user_id=1&cat=industrial";
   
  this.http.post(apiurl,datax,{headers:headers}).subscribe(data=>{    
      if(data){ 
          if(data['status']==1 && data['status']){
            this.coolers1=data['data'];  
            console.log(this.coolers1);  
          }else{
          }
        }
    });
} 
productdetails=ProductdetailsPage;

}
