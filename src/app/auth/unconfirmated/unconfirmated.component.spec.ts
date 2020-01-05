import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmatedComponent } from './unconfirmated.component';

describe('UnconfirmatedComponent', () => {
  let component: UnconfirmatedComponent;
  let fixture: ComponentFixture<UnconfirmatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfirmatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfirmatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
