import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-viewchild',
  templateUrl: './sub-viewchild.component.html',
  styleUrls: ['./sub-viewchild.component.css'],
})
export class SubViewchildComponent implements OnInit {
  visible: boolean = true;
  constructor() {}

  ngOnInit() {}
}
