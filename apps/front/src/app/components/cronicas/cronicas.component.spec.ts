import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronicasComponent } from './cronicas.component';

describe('CronicasComponent', () => {

  let component: CronicasComponent;
  let fixture: ComponentFixture<CronicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CronicasComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CronicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
