import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import User from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  user: User = new User();
  password = '';
  passwordMatch = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.formBuilder.group({
      name: '' ,
      surname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: ''
    });
  }

  onSubmit(value: any) {
    this.setUser(value);
    this.userService.saveUser(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  setUser(value: any){
    this.user = new User();
    this.user.isim = value.name;
    this.user.soyisim = value.surname;
    this.user.parola = value.password;
    this.user.mail = value.email;
    this.user.username = value.username;
    console.log(this.user);
  }

  passwordControl() {
    if (this.password === this.user.parola){
      this.passwordMatch = true;
    }
  }
}
