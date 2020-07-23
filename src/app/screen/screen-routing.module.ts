import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {Role} from '../shared/models/role';
import {AuthGuardService} from '../shared/common/guards/auth-guard.service';
import {UserListComponent} from './pages/user-list/user-list.component';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {ContactComponent} from "./pages/contact/contact.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product-detail/:id', component: ProductDetailComponent
  },
  {
    path: 'product-list', component: ProductListComponent
  },

  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'user-list', component: UserListComponent,
    canActivate: [AuthGuardService],
    data: {roles: [Role.ADMIN]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenRoutingModule { }
