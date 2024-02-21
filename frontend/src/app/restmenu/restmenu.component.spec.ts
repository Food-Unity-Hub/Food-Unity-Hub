import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestmenuComponent } from './restmenu.component';

describe('RestmenuComponent', () => {
  let component: RestmenuComponent;
  let fixture: ComponentFixture<RestmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
