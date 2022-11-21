import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  childDisplay = '';

  // @Output()
  // sendMessageEmitter = new EventEmitter();

  // sendMessageToParent(e: any) {
  //   this.sendMessageEmitter.emit(e.target.value);
  // }
}
