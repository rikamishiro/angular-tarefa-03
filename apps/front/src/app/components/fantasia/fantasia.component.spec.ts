import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasiaComponent } from './fantasia.component';

describe('HomeComponent', () => {

  let component: FantasiaComponent;
  let fixture: ComponentFixture<FantasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FantasiaComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FantasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
