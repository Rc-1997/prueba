import { Directive, ElementRef,Input, SimpleChanges} from '@angular/core';

interface OnChanges {
  ngOnChanges(changes: SimpleChanges): void
}

@Directive({
  selector: '[appComponenteValido]'
})
export class ComponenteValidoDirective {
  @Input() formValid!:boolean;
  constructor(private element:ElementRef) {
    this.cambioColor('red');
  }
  ngOnChanges(Change:SimpleChanges){
    if (this.formValid) {
      this.cambioColor('green');
    }
    else{
      this.cambioColor('red');
    }
  }

  private cambioColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
