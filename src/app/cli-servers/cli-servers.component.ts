import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli-servers',
  templateUrl: './cli-servers.component.html',
  styleUrls: ['./cli-servers.component.css']
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
