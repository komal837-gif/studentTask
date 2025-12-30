import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrtConfirmComponent } from './grt-confirm.component';

describe('GrtConfirmComponent', () => {
  let component: GrtConfirmComponent;
  let fixture: ComponentFixture<GrtConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrtConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrtConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
