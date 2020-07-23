import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../services/user.service';
import User from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }


  ngOnInit(): void {
    if(this.userService.currentUserValue){
      this.router.navigate(['/home']);
      return;
    }
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(value: any) {
    console.log(value);
    this.setValue(value);
    this.userService.login(this.user).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/home']);
    });
  }

  setValue(value: any){
    this.user = new User();
    this.user.mail = value.email;
    this.user.parola = value.password;
  }
}
