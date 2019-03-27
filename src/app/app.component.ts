import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tagName = 'recipe';

  triggerTag(tagname: string){
    this.tagName = tagname;
  }
}
