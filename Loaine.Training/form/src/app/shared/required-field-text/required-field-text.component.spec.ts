import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredFieldTextComponent } from './required-field-text.component';

describe('RequiredFieldTextComponent', () => {
  let component: RequiredFieldTextComponent;
  let fixture: ComponentFixture<RequiredFieldTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredFieldTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredFieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
