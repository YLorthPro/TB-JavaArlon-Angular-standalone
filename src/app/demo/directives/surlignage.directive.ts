import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[surlignage]'
})
export class SurlignageDirective {

  constructor(private _element: ElementRef) { }

  @HostListener('mouseover')
  onMouseover(){
    this._element.nativeElement.style.backgroundColor = 'green'
  }

  @HostListener('mouseout')
  onMouseout(){
    this._element.nativeElement.style.background= 'none'
  }

}
