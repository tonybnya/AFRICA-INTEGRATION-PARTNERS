import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollsocialiconsComponent } from './scrollsocialicons.component';

describe('ScrollsocialiconsComponent', () => {
  let component: ScrollsocialiconsComponent;
  let fixture: ComponentFixture<ScrollsocialiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollsocialiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollsocialiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
