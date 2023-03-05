import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchildComponent } from './schild.component';

describe('SchildComponent', () => {
  let component: SchildComponent;
  let fixture: ComponentFixture<SchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
