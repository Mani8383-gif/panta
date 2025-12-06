import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Khadamat } from './khadamat';

describe('Khadamat', () => {
  let component: Khadamat;
  let fixture: ComponentFixture<Khadamat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Khadamat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Khadamat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
