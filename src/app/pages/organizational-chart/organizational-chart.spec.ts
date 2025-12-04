import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalChart } from './organizational-chart';

describe('OrganizationalChart', () => {
  let component: OrganizationalChart;
  let fixture: ComponentFixture<OrganizationalChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationalChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationalChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
