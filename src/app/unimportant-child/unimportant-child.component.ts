import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-unimportant-child',
  templateUrl: './unimportant-child.component.html',
  styleUrls: ['./unimportant-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnimportantChildComponent implements OnInit {

  @Input() items:string[];
  constructor() { }

  ngOnInit() {
  }

}
