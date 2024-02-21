import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestordeComponent } from './restorde.component';

describe('RestordeComponent', () => {
  let component: RestordeComponent;
  let fixture: ComponentFixture<RestordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestordeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
