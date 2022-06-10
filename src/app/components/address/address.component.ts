import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
// import { userInfo } from 'os';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  // @Input usy=user;
  usr: any;
  // user: any;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.usersService.getUser(id).subscribe(u => {
      console.log(u);
      this.usr = u;
    })
  }

}
