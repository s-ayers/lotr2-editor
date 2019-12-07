import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShireComponent } from './shire.component';

describe('ShireComponent', () => {
  let component: ShireComponent;
  let fixture: ComponentFixture<ShireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
