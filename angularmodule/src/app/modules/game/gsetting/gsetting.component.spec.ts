import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsettingComponent } from './gsetting.component';

describe('GsettingComponent', () => {
  let component: GsettingComponent;
  let fixture: ComponentFixture<GsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
