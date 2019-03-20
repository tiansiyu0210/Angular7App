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
  serverCreationStatus = 'no server was created';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreatedServer() {
    this.serverCreationStatus = 'server was created';
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
