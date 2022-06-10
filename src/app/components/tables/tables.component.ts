import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

    // users: string[] = ['Peter', 'Jonn', 'Abby'];
    // users: string[] = ['Peter', 'Jonn', 'Abby'];

  @Input() child!: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    users: any[] = [
      {id:101, name: 'Peter', city: 'New York'},
      {id:102, name: 'John', city: 'Delhi'},
      {id:103, name: 'Abby', city: 'Amsterdam'}
    ]
  constructor() { }

  ngOnInit(): void {
  }

  passData() {
    this.notify.emit("This message is coming from the Child!");
  }
}
