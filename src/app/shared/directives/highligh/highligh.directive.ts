import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector:'[highlight]'
})
export class HightlightDirective {
  
  @Input('inputColor')
  inputColor = 'red';
  
  constructor(private referenceElement: ElementRef) {
    //this.referenceElement.nativeElement.style.backgroundColor = 'gray'
  }
/*
  @HostListener('mouseenter')
  me() {
    this.referenceElement.nativeElement.style.backgroundColor = 'magenta'
  }

  @HostListener('mouseout')
  mo() {
    this.referenceElement.nativeElement.style.backgroundColor = 'yellow'
    this.referenceElement.nativeElement.style.color = 'blue'
    this.referenceElement.nativeElement.style.border = '5px solid blue'
  }
*/
  @HostListener('mouseenter')
  click() {
    this.referenceElement.nativeElement.style.backgroundColor = this.inputColor;
  }
}