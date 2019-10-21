import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantChildComponent } from './important-child.component';

describe('ImportantChildComponent', () => {
  let component: ImportantChildComponent;
  let fixture: ComponentFixture<ImportantChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
