import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailWithVotesComponent } from './session-detail-with-votes.component';

describe('SessionDetailWithVotesComponent', () => {
  let component: SessionDetailWithVotesComponent;
  let fixture: ComponentFixture<SessionDetailWithVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDetailWithVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDetailWithVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
