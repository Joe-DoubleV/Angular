import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlistComponent } from './alist.component';

describe('AlistComponent', () => {
  let component: AlistComponent;
  let fixture: ComponentFixture<AlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
