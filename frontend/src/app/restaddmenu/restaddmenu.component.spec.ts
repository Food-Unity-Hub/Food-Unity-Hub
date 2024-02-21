import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaddmenuComponent } from './restaddmenu.component';

describe('RestaddmenuComponent', () => {
  let component: RestaddmenuComponent;
  let fixture: ComponentFixture<RestaddmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaddmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaddmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
