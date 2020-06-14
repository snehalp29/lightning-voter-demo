import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreviewedTalkComponent } from './unreviewed-talk.component';

describe('UnreviewedTalkComponent', () => {
  let component: UnreviewedTalkComponent;
  let fixture: ComponentFixture<UnreviewedTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreviewedTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreviewedTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
