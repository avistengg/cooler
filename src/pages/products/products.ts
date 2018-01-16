import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginPage } from '../login/login';
import { OnInit } from '@angular/core'; 
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage implements OnInit {
  formgroup: FormGroup;
  email: any;
  name: any;
  userdata: any;
  productdetails: any; 
  password: AbstractControl;
  emailx: AbstractControl;
  address: AbstractControl; 
  city: AbstractControl;
  state: AbstractControl;
  pincode: AbstractControl;
  constructor(private http : HttpClient,
    public cookieService:CookieService,
    public formbuilder:FormBuilder,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, 
    public menu: MenuController,
     public navParams: NavParams) {
      this.formgroup= formbuilder.group({
        address:['',Validators.required], 
        city:['',Validators.required], 
        emailx:['',[Validators.required,Validators.email]],
        state:['',Validators.required],
        pincode:['',Validators.required]
        });

        this.city = this.formgroup.controls['city'];
        this.address = this.formgroup.controls['address'];
        this.state = this.formgroup.controls['state']; 
        this.emailx = this.formgroup.controls['emailx'];
        this.pincode = this.formgroup.controls['pincode']; 
  this.userdata= JSON.parse(localStorage.getItem('userdata'));
  this.name=this.userdata.name;
  this.email=this.userdata.email;
  //console.log(localStorage.getItem('userdata'));
  }
 
  ngOnInit(): void {
    this.productdetails = this.navParams.data;
  }
  onfillup(form:NgForm){
    const loading = this.loadingCtrl.create({
      content:"Order is in process...."
    });
    loading.dismiss();
    const alert = this.alertCtrl.create({
     title:'Order SuccessFul',
     message:"Thank you for your order, will contact you very soon.",
     buttons:['Ok']
   }); 
  alert.present();
  this.navCtrl.push(HomePage);
  }

}
