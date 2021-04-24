import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[BgYellow]'
})
export class BgYellowDirective {



  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
    //this.elementRef.nativeElement.style.backgroundColor = "yellow"; Doenst use this code
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
      );
  }

}
