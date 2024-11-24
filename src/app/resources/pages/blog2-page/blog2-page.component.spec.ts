import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog2PageComponent } from './blog2-page.component';

describe('Blog2PageComponent', () => {
  let component: Blog2PageComponent;
  let fixture: ComponentFixture<Blog2PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Blog2PageComponent]
    });
    fixture = TestBed.createComponent(Blog2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
