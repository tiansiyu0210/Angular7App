import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { CliServersComponent } from './cli-servers/cli-servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CliServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
