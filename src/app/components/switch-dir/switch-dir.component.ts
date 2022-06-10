import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-dir',
  templateUrl: './switch-dir.component.html',
  styleUrls: ['./switch-dir.component.scss']
})
export class SwitchDirComponent implements OnInit {

  countries: any[]= [
    {code: 'ned', country: 'Netherlands'},
    {code: 'ind', country: 'India'},
    {code: 'uk', country: 'United Kingdom'},
  ];
  selectedCountry!: string ;

  constructor() { }

  ngOnInit(): void {
  }

  choice($event:any) {
    this.selectedCountry = $event.target.value;
// for(let i  =  0; i < this.countries.length; i++) {
//   this.selectedCountry = this.countries[i].code
// }

      // this.selectedCountry = code;
      // console.log(code)

  }

}
