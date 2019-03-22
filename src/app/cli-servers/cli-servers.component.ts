import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cli-servers',
  templateUrl: './cli-servers.component.html',
  styleUrls: ['./cli-servers.component.css'],
  encapsulation: ViewEncapsulation.Emulated// this is default, we don;t havw to add here, other option is NONE and Native
})
export class CliServersComponent implements OnInit {
  serversList = [{id: 1, name: 'tian'}, {id: 2, name: 'siyu'}];
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverData: {id: number, name: string}) {
    this.serversList.push({
      id: serverData.id,
      name : serverData.name
    });
  }

}
