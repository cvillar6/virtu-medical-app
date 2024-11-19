import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MraPageComponent } from './mra-page.component';

describe('MraPageComponent', () => {
  let component: MraPageComponent;
  let fixture: ComponentFixture<MraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MraPageComponent]
    });
    fixture = TestBed.createComponent(MraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
