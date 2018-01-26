import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarssComponent } from './carss.component';

describe('CarssComponent', () => {
  let component: CarssComponent;
  let fixture: ComponentFixture<CarssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
