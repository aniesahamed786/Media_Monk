import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvchildComponent } from './svchild.component';

describe('SvchildComponent', () => {
  let component: SvchildComponent;
  let fixture: ComponentFixture<SvchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
