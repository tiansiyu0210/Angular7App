import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cli-servers',
  templateUrl: './cli-servers.component.html',
  styleUrls: ['./cli-servers.component.css'],
  encapsulation: ViewEncapsulation.Emulated// this is default, we don;t havw to add here, other option is NONE and Native
})
export class CliServersComponent implements OnInit , OnDestroy{
  serversList = [{id: 1, name: 'tian'}, {id: 2, name: 'siyu'}];
  localRefTs = '';
  viewChildVarTsValue = '';

  @ViewChild('viewChildVar') viewChildVarTs: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverData: {id: number, name: string}) {
    this.serversList.push({
      id: serverData.id,
      name : serverData.name
    });
  }

  passLocalRef(localRefExample: HTMLInputElement){
    console.log(this.viewChildVarTs.nativeElement.value);
    this.localRefTs = localRefExample.value;
  }

  passViewChild() {
    // console.log(viewChildVar);
    this.viewChildVarTsValue = this.viewChildVarTs.nativeElement.value;
  }

  ChangeFirstServername(){
    this.serversList[0].name = 'changed';
  }

  DestoryFirstServer(){
    this.serversList.splice(0, 1);
  }

  ngOnDestroy() {
    console.log('in the CliServersComponent ngOnDestroy');
  }

}
