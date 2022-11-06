import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SubViewchildComponent } from './sub-viewchild/sub-viewchild.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
})
export class ViewchildComponent implements OnInit {
  constructor() {}
  @ViewChild('textname', { static: true }) mytext: ElementRef;
  @ViewChild(SubViewchildComponent) child;
  ngOnInit() {}

  submit(event) {
    this.child.visible = !this.child.visible;
    console.log(this.mytext.nativeElement.value);
    console.log(event);
  }
}
