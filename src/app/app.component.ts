import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tagName = 'recipe';
  test = true;
  numbersEl = 1;

  triggerTag(tagname: string){
    this.tagName = tagname;
  }

  changeTest(){
    this.test = !this.test;
  }
}
