import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[myDir]'
})
export class MydirDirective {

  constructor(public elRef: ElementRef) {
    console.log('gg');
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('green');
  }

  changeColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
