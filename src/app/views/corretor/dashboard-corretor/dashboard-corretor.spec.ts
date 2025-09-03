import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCorretor } from './dashboard-corretor';

describe('DashboardCorretor', () => {
  let component: DashboardCorretor;
  let fixture: ComponentFixture<DashboardCorretor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCorretor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCorretor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
