import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIdYearComponent } from './s-id-year.component';

describe('SIdYearComponent', () => {
  let component: SIdYearComponent;
  let fixture: ComponentFixture<SIdYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIdYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIdYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
