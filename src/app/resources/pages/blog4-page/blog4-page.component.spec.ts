import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog4PageComponent } from './blog4-page.component';

describe('Blog4PageComponent', () => {
  let component: Blog4PageComponent;
  let fixture: ComponentFixture<Blog4PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Blog4PageComponent]
    });
    fixture = TestBed.createComponent(Blog4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
