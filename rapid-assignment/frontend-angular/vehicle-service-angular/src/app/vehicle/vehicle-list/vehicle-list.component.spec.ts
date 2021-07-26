import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import {Location} from '@angular/common';
import { VehicleListComponent } from './vehicle-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'vehicle-update/:id', component: DummyComponent}
        ]),
        ToastrModule.forRoot()
      ],
      providers: [
        {provide: VehicleService, useClass: VehicleServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 links', () => {
    // const buttons = fixture.debugElement.queryAll(By.css('.btns'));
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
  });

  it('should only have one table', () => {
    const tables = fixture.debugElement.queryAll(By.css('table'));
    expect(tables.length).toBe(2);
  });

  it('should return array of vehicles when ngOnInit() get called', async () => {
    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(component.allVehicles.length).toBe(2);
    });
  });

  it(`should navigate to '/vehicle-update/100' when loadUpdate() get called`, async () => {
    const location = TestBed.inject(Location);
    component.loadUpdate(100);
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/vehicle-update/100');
    });
  });

  class VehicleServiceStub {
    getAllVehiclesPaginated(): Promise<any[]> {
      return Promise.resolve([
        {id: 10, firstName: 'Janitha', lastName: 'Bandara', email: 'janitha@gmail.com', carMake: 'Toyota'},
        {id: 20, firstName: 'Sunil', lastName: 'Perera', email: 'sunil@gmail.com', carMake: 'Nissan'}
      ]);
    }
  }

  @Component({ template: '' })
  class DummyComponent {}

});
