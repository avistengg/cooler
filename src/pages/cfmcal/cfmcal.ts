import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CfmcalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cfmcal',
  templateUrl: 'cfmcal.html',
})

export class CfmcalPage {
  final:any;
  lengthofroom: AbstractControl;
  widthofroom: AbstractControl;
  heightofroom: AbstractControl; 
  airchangerate: AbstractControl; 
  airchangeratex: any;
  formgroup:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formbuilder:FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, 
    public menu: MenuController) {
      this.formgroup= formbuilder.group({
        lengthofroom:['',Validators.required],
        widthofroom:['',Validators.required], 
        heightofroom:['',Validators.required], 
        airchangerate:['',Validators.required]
        });

        this.lengthofroom = this.formgroup.controls['lengthofroom'];
        this.widthofroom = this.formgroup.controls['widthofroom'];
        this.heightofroom = this.formgroup.controls['heightofroom']; 
        this.airchangerate = this.formgroup.controls['airchangerate']; 
  }
  
  onCalculate(form:NgForm){ 
    const loading = this.loadingCtrl.create({
      content:"Calculation is in process...."
    });
     
    this.airchangeratex = (form.value.lengthofroom * form.value.widthofroom * form.value.heightofroom * form.value.airchangerate)/60;	
    }
   

}
