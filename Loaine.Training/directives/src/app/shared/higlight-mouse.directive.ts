import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HiglightMouse]'
})
export class HiglightMouseDirective {

  backgroundColor2:string;
  @HostBinding('style.backgroundColor') get setColor(){
    //extre code if u want
    return this.backgroundColor2;
  }
  @HostBinding('style.backgroundColor') backgroundColor: string;



  @HostListener('mouseenter') onMouseOver(){
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
      )*/
      this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'white'
      )*/
      this.backgroundColor = 'white';
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
