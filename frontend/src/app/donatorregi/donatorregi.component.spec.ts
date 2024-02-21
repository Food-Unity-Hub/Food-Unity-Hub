import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorregiComponent } from './donatorregi.component';

describe('DonatorregiComponent', () => {
  let component: DonatorregiComponent;
  let fixture: ComponentFixture<DonatorregiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorregiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatorregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
