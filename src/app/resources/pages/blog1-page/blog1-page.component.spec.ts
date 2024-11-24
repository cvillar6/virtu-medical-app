import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog1PageComponent } from './blog1-page.component';

describe('Blog1PageComponent', () => {
  let component: Blog1PageComponent;
  let fixture: ComponentFixture<Blog1PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Blog1PageComponent]
    });
    fixture = TestBed.createComponent(Blog1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
