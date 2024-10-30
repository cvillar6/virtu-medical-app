import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsCarouselComponent } from './solutions-carousel.component';

describe('SolutionsCarouselComponent', () => {
  let component: SolutionsCarouselComponent;
  let fixture: ComponentFixture<SolutionsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsCarouselComponent]
    });
    fixture = TestBed.createComponent(SolutionsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
