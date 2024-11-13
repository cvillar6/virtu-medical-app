import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagingPageComponent } from './imaging-page.component';

describe('ImagingPageComponent', () => {
  let component: ImagingPageComponent;
  let fixture: ComponentFixture<ImagingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagingPageComponent]
    });
    fixture = TestBed.createComponent(ImagingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
