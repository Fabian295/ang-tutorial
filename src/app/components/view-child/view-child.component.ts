import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('target')
  marker!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  handleTarget(ev: any) {
   let btn = ev.target;
    this.marker.nativeElement.style="color:skyblue;  border: 2px solid skyblue";
  }

  purpleTarget(ev: any) {
    let ptBtn = ev.target;
    this.marker.nativeElement.style="color:yellowgreen; border: 2px solid yellowgreen";
  }
}
