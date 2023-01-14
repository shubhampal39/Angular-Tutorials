import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective implements OnInit {
  @HostBinding('style.border') border: string;
  // @HostBinding('style.border') border: string;
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }

  ngOnInit() {
    this.border = 'red';
  }
}
