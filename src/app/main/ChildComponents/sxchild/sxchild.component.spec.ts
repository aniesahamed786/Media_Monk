import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SxchildComponent } from './sxchild.component';

describe('SxchildComponent', () => {
  let component: SxchildComponent;
  let fixture: ComponentFixture<SxchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SxchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SxchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
