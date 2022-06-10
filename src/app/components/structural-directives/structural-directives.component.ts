import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  cardUrl: string = 'assets/img/logo_purple.jpg';
  parent: string = 'hello from parent';


  constructor() { }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scroll(0,0);
  }

  childData: any;
  parentHandler(data:string) {
    this.childData = data;
  }

  childDiv!: HTMLDivElement;
  showParent(data: HTMLDivElement) {
    this.childDiv = data;
    console.log(data)
  }

}
