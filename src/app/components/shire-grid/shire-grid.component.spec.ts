import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShireGridComponent } from './shire-grid.component';

describe('ShireGridComponent', () => {
  let component: ShireGridComponent;
  let fixture: ComponentFixture<ShireGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShireGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShireGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
