import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdashRestanaComponent } from './restdash-restana.component';

describe('RestdashRestanaComponent', () => {
  let component: RestdashRestanaComponent;
  let fixture: ComponentFixture<RestdashRestanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestdashRestanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestdashRestanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
