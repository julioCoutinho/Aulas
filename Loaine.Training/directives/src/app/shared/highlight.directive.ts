import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor = 'white';
  @Input() highLightColor = 'green';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

}
