import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector:'[highlight]'
})
export class HightlightDirective {
  
  @Input('inputColor')
  inputColor = 'red';
  
  constructor(private referenceElement: ElementRef) {
  }
  @HostListener('mouseenter')
  click() {
    this.referenceElement.nativeElement.style.backgroundColor = this.inputColor;
  }
}