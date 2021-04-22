import { AfterContentChecked, AfterContentInit, AfterViewChecked,
   AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
    OnInit, SimpleChanges, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit, OnChanges,
 AfterContentInit, AfterContentChecked, AfterViewChecked,
 AfterViewInit, OnDestroy {

  @Input() initialValue = 10;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }



  ngOnInit(): void {
  }

}
