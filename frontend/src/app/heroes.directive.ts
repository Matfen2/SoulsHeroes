import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeroes]',
})
export class HeroesDirective {
  constructor(private el: ElementRef) {
    this.scale('');
    this.cursor('');
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  private cursor(pointer: string) {
    this.el.nativeElement.style.cursor = pointer;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cursor('pointer');
    this.scale('0.9');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cursor('pointer');
    this.scale('1.0');
  }
}
