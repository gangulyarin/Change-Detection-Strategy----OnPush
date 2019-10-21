import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-important-child',
  templateUrl: './important-child.component.html',
  styleUrls: ['./important-child.component.css']
})
export class ImportantChildComponent implements OnInit {

  @Input() items:string[];
  constructor() { }

  ngOnInit() {
  }

}
