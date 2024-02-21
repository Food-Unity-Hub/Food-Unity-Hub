import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestproeditComponent } from './restproedit.component';

describe('RestproeditComponent', () => {
  let component: RestproeditComponent;
  let fixture: ComponentFixture<RestproeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestproeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestproeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
