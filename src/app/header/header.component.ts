import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() tag = new EventEmitter<string>();

  showContent(tagName: string){
    this.tag.emit(tagName);
  }
}
