import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execute } from './execute';

describe('Execute', () => {
  let component: Execute;
  let fixture: ComponentFixture<Execute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Execute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Execute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
