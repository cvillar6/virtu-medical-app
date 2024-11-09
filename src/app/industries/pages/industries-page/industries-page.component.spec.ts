import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesPageComponent } from './industries-page.component';

describe('IndustriesPageComponent', () => {
  let component: IndustriesPageComponent;
  let fixture: ComponentFixture<IndustriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriesPageComponent]
    });
    fixture = TestBed.createComponent(IndustriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
