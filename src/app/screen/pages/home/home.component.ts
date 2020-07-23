import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../../shared/services/product-service.service';
import Product from '../../shared/models/product';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.findTop10ByOrderByIdAsc();
  }

  private findTop10ByOrderByIdAsc() {
    this.productService.findTop10ByOrderByIdAsc().subscribe((res: Product[]) => {
      console.log(res);
      this.products = res;
    });
  }
}

