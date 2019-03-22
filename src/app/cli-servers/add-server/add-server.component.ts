import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  newServerId = 0;
  newServername = '';

  constructor() { }

  ngOnInit() {
  }


  @Output() serverCreated = new EventEmitter<{id: number, name: string}>();

  onAddServer() {
    this.serverCreated.emit({
      id: this.newServerId,
      name: this.newServername});
  }
}
