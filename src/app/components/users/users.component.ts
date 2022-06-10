import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersPageTitle: string = 'Users';
  usersSubPageTitle: string = 'via json Placeholder fake API';

  constructor(private userService: UsersService) { }
  users: any;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: any) => {
      return this.users = data;
    })
  }

}
