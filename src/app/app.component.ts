import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onpush';
  importantItems:string[];
  unImportantItems:string[];

  ngOnInit(){
    this.importantItems = ['Superman', 'Batman', 'Wonder Woman'];
    this.unImportantItems=['Arrow', 'Flash', 'Supergirl'];
  }

  refresh(){
    this.importantItems.push('Aquaman');
    this.unImportantItems.push('Batgirl');
  }
}
