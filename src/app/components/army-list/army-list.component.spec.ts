import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyListComponent } from './army-list.component';

describe('ArmyListComponent', () => {
  let component: ArmyListComponent;
  let fixture: ComponentFixture<ArmyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
