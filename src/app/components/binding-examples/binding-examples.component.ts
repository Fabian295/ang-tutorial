import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.scss']
})
export class BindingExamplesComponent implements OnInit {
  pageTitle: String = 'Data Binding Examples';
  title: String = 'Making a click event!!'
  compClick:String  = 'assets/img/component-click-ngif.png'
  tempClick:String  = '/assets/img/ngif-click-code.png';
  inputText: String = 'Initial Value';

  pageTitleLine: String  =  'This line is rendered with the concept of Data Binding, in this case "dubbel curly braces", "\{\{\}\}". This is called "Interpolation"';
  code: String  = 'assets/img/templatte-code.png';
  tsCode: String = "/assets/img/ts-file-code.png";

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = true;

  changeTitle() {

    this.isShown = !this.isShown;

  }

}






