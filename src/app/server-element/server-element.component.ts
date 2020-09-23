import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // By default only your component get the applied styles, but by adding ancapsulated we can change this beahviour.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // Binding through the alias: Passing argument to @Input the name you want to use 'element' outside of this component.
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor call');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges call');
    console.log('changes: ', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
    console.log('Text content', this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  // Get called with every call
  ngDoCheck() {
    console.log('ngDoCheck call!');
  }

  // Gets called only once
  ngAfterContentInit(){
    console.log('ngAfterContentInit call!');
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  // Get called after every change detection cycle
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked call!');
  }

  // Get access to template elements
  ngAfterViewInit(){
    console.log('ngAfterViewInit call!');
    console.log('Text content', this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked call!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy call!');
  }
}
