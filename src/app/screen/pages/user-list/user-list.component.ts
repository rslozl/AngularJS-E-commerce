import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import User from '../../../shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe((res: User[]) => {
      console.log(res);
      this.users = res;
    });
  }
}

