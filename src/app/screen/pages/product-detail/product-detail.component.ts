import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../../shared/services/product-service.service';
import Product from '../../shared/models/product';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  product: Product = new Product();
  constructor(private route: ActivatedRoute,
              private productService: ProductServiceService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if ( params.has('id')){
        this.productId = +params.get('id');
      }
    });
    this.getProduct();
    console.log(this.productId);
  }

  getProduct(){
    this.productService.getProductWithById(this.productId).subscribe( (res) => {
      this.product = res;
    });
  }

  AddFavorite() {
    debugger;

    if(this.userService.currentUserValue.favoriteProducts == null){
      this.userService.currentUserValue.favoriteProducts = [];
    }

    this.userService.currentUserValue.favoriteProducts.push(Product.of(this.productId));
    this.userService.update(this.userService.currentUserValue).subscribe((res) =>{
      console.log(res);
    });
  }
}
