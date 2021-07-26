import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { VehicleUpdateComponent } from './vehicle-update.component';

describe('VehicleUpdateComponent', () => {
  let component: VehicleUpdateComponent;
  let fixture: ComponentFixture<VehicleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUpdateComponent ],
      imports: [ReactiveFormsModule],
      providers: [ActivatedRoute]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
