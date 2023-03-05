import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrdchildComponent } from './trdchild.component';

describe('TrdchildComponent', () => {
  let component: TrdchildComponent;
  let fixture: ComponentFixture<TrdchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrdchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
