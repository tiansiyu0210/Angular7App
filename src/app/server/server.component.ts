import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
     .online {
      color: white
    }
  `]
})
export class ServerComponent {
  serverName = 'localhost';
  serverId = 10;
  serverStatus = 'online';
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  servers = ['agile', 'pilot', 'production'];

  username = 'tian';
  serveCreated = false;



  getServerStatus() {
    this.serverId = Math.random();
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
    return this.serverStatus;
  }

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreatedServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created. creator is:' + this.username ;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serveCreated = true;
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  getColor() {
    console.log(this.serverStatus === 'online' ? 'green' : 'red');
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
