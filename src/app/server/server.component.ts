import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverName = 'tian';
  serverId = 10;
  serverStatus = 'online';
  allowNewServer = false;

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }
}
