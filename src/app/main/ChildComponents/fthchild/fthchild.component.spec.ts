import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FthchildComponent } from './fthchild.component';

describe('FthchildComponent', () => {
  let component: FthchildComponent;
  let fixture: ComponentFixture<FthchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FthchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FthchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
