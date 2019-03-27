import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tagName = 'recipe';
  test = true;

  triggerTag(tagname: string){
    this.tagName = tagname;
  }

  changeTest(){
    this.test = !this.test;
  }
}
