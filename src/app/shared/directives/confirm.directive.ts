import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector:'[appConfirm]'
})
export class ConfirmDirective {
  
  @HostListener('click')
  click() {
    const confirm = window.confirm("Do you really want to leave?");
    alert(confirm);
    if (!confirm) {
      window.open("google.com", "Thanks for Visiting!");
    }
  }
}