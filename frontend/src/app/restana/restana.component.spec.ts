import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestanaComponent } from './restana.component';

describe('RestanaComponent', () => {
  let component: RestanaComponent;
  let fixture: ComponentFixture<RestanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
