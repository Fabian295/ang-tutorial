// import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-if-dir',
  templateUrl: './if-dir.component.html',
  styleUrls: ['./if-dir.component.scss']
})
export class IfDirComponent implements OnInit {

  // @Output() show: EventEmitter<string> = new EventEmitter<string>();
  @Output() show: EventEmitter<HTMLDivElement> = new EventEmitter<HTMLDivElement>();
  isvisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeBox(){
    this.isvisible = !this.isvisible;
  }

  showDiv() {
    let div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    div.style.width = '100px';
    div.style.height = '100px';
    console.log('message')
    div.innerHTML = `<div style="background-color: blue; width: 100px; height: 100px;"></div>`
    // this.show.emit('Hallo people');
    // let box = document.querySelector('div-box');

    // box: Element;
    // box: HTMLDivElement = div;

    this.show.emit(document.body.appendChild(div));

  }

}
