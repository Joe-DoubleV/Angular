import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinfoComponent } from './ginfo.component';

describe('GinfoComponent', () => {
  let component: GinfoComponent;
  let fixture: ComponentFixture<GinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
