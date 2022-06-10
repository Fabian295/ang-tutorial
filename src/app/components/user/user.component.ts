import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    // console.log(this.route)
    // console.log(this.route.snapshot.params['id'])
    let id = this.route.snapshot.params['id']
    // console.log('id: ', id);
    this.usersService.getUser(id).subscribe(u => {
      console.log(u)

      this.user = u;
    })
  }

}
