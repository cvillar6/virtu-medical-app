import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog3PageComponent } from './blog3-page.component';

describe('Blog3PageComponent', () => {
  let component: Blog3PageComponent;
  let fixture: ComponentFixture<Blog3PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Blog3PageComponent]
    });
    fixture = TestBed.createComponent(Blog3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
