import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../shared/services/product-service.service';
import Product from '../../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.getAllProduct();
  }

  private getAllProduct() {
    this.productService.getAllProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
