import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrchildComponent } from './frchild.component';

describe('FrchildComponent', () => {
  let component: FrchildComponent;
  let fixture: ComponentFixture<FrchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
