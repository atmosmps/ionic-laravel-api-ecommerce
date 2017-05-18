import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { ProductListPage } from "../product-list/product-list";
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ProductDetail page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  public product = null;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http      
  ) {}

  ionViewDidLoad() {
    let headers = new Headers();
    headers.set('Authorization', `Bearer ${window.localStorage['token']}`);
    let requestOptions = new RequestOptions({headers});
    this.http.get(`http://127.0.0.1:8000/api/products/${this.navParams.get('id')}`, requestOptions)
        .toPromise().then((response) => {
      this.product = response.json();
    })
  }
}
