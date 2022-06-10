import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  pageTitle: string = 'Using Pipes & ngFor to make Tables';
  imgUrl: string = 'assets/img/custem-pipe.png';

  users: any;
  // users: any[]=[
  //   {id: 0o1,name:'john',city:'Amsterdam',salary:'3500', dob:new Date("05/07/1986")},
  //   {id: 0o2,name:'Reggi',city:'London',salary:'4000', dob:new Date("12/10/1982")},
  //   {id: 0o3,name:'Paul',city:'Vienna',salary:'3000', dob:new Date("04/17/1983")},
  //   {id: 0o4,name:'Mark',city:'Paris',salary:'5000', dob:new Date("05/25/1988")}
  // ]

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
    // this.users = this.usersService.getAllUsers()
  }

}
