import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appComicsShow]',
})
export class ComicsShowDirective {
  constructor(private el: ElementRef) {
    this.boxShadow('');
    this.scale('');
    this.cursor('');
  }

  private boxShadow(box: string) {
    this.el.nativeElement.style.boxShadow = box;
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  private cursor(pointer: string) {
    this.el.nativeElement.style.cursor = pointer;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.boxShadow('-1px -1px 15px 14px #FFFFFF;');
    this.cursor('pointer');
    this.scale('0.9');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow('0px 0px 0px 0px #000000;');
    this.cursor('pointer');
    this.scale('1.0');
  }
}
