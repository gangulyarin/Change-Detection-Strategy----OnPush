import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnimportantChildComponent } from './unimportant-child.component';

describe('UnimportantChildComponent', () => {
  let component: UnimportantChildComponent;
  let fixture: ComponentFixture<UnimportantChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnimportantChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnimportantChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
