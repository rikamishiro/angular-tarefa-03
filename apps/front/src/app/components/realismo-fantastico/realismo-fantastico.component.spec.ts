import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealismoFantasticoComponent } from './realismo-fantastico.component';

describe('RealismoFantasticoComponent', () => {

  let component: RealismoFantasticoComponent;
  let fixture: ComponentFixture<RealismoFantasticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RealismoFantasticoComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RealismoFantasticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
