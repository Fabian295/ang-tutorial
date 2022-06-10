import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  servicePageTitle: string = 'Angular Service concept';

  users: any;
  constructor(private usersServce: UsersService) { }

  ngOnInit(): void {
    this.usersServce.getAllUsers().subscribe((data: any) => {
      this.users = data;
    })
  }

  // getUserData() {

  // }

}
