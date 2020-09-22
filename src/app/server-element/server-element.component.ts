import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // By default only your component get the applied styles, but by adding ancapsulated we can change this beahviour.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // Binding through the alias: Passing argument to @Input the name you want to use 'element' outside of this component.
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
