import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy {
  newServerId = 0;
  newServername = '';

  constructor() {
    console.log('in the AddServerComponent constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('in the AddServerComponent ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('in the AddServerComponent ngOnInit');
  }





  @Output() serverCreated = new EventEmitter<{id: number, name: string}>();

  onAddServer() {
    this.serverCreated.emit({
      id: this.newServerId,
      name: this.newServername});
  }

  ngDoCheck(): void {
    console.log('in the AddServerComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('in the AddServerComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('in the AddServerComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('in the AddServerComponent ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('in the AddServerComponent ngOnDestroy');
  }


}
