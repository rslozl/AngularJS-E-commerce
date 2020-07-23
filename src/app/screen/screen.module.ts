import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { ScreenComponent } from './screen.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [ScreenComponent, HomeComponent, HeaderComponent, FooterComponent, ProductDetailComponent, UserListComponent, ProductListComponent, ContactComponent],
  imports: [
    CommonModule,
    ScreenRoutingModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ScreenModule { }
