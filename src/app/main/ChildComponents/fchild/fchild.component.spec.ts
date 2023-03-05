import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FchildComponent } from './fchild.component';

describe('FchildComponent', () => {
  let component: FchildComponent;
  let fixture: ComponentFixture<FchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
