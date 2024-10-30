import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsCardComponent } from './solutions-card.component';

describe('SolutionsCardComponent', () => {
  let component: SolutionsCardComponent;
  let fixture: ComponentFixture<SolutionsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsCardComponent]
    });
    fixture = TestBed.createComponent(SolutionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
