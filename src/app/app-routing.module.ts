import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScreenComponent} from './screen/screen.component';
import {RegisterComponent} from './shared/components/register/register.component';
import {LoginComponent} from './shared/components/login/login.component';
import {AuthGuardService} from './shared/common/guards/auth-guard.service';
import {Role} from './shared/models/role';


const routes: Routes = [
  {
    path: 'home',
    component: ScreenComponent,
    loadChildren: () => import('./screen/screen.module').then(module => module.ScreenModule),
    canActivate: [AuthGuardService],
    data: {roles: [Role.USER, Role.ADMIN]}
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
