import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionInterEditComponent } from './session-inter-edit.component';

describe('SessionInterEditComponent', () => {
  let component: SessionInterEditComponent;
  let fixture: ComponentFixture<SessionInterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionInterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionInterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
