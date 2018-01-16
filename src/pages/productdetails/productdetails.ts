import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { ProductsPage } from '../products/products';

/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductdetailsPage implements OnInit {
 
  productdetails: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(): void {
    this.productdetails = this.navParams.data;
  }
  productsPage=ProductsPage;

}
