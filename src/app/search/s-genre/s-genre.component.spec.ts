import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SGenreComponent } from './s-genre.component';

describe('SGenreComponent', () => {
  let component: SGenreComponent;
  let fixture: ComponentFixture<SGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
