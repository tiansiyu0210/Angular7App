import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliServersComponent } from './cli-servers.component';

describe('CliServersComponent', () => {
  let component: CliServersComponent;
  let fixture: ComponentFixture<CliServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
