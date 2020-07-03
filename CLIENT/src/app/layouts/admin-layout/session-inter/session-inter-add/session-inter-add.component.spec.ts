import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionInterAddComponent } from './session-inter-add.component';

describe('SessionInterAddComponent', () => {
  let component: SessionInterAddComponent;
  let fixture: ComponentFixture<SessionInterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionInterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionInterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
