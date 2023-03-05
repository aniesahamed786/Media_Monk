import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthchildComponent } from './ethchild.component';

describe('EthchildComponent', () => {
  let component: EthchildComponent;
  let fixture: ComponentFixture<EthchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
