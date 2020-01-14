import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsettingComponent } from './asetting.component';

describe('AsettingComponent', () => {
  let component: AsettingComponent;
  let fixture: ComponentFixture<AsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
