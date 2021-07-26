import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.scss']
})
export class VehicleUpdateComponent implements OnInit {

  vehicleId: number;
  vehicleToBeUpdated: Vehicle;

  vehicleUpdateForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    carMake: new FormControl(),
    carModel: new FormControl(),
    manufacturedDate: new FormControl(),
    vinNumber: new FormControl(),
    ageOfVehicle: new FormControl(),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.vehicleId = Number(params.get('id'));

      if (this.vehicleId) {
        this.vehicleService.findVehicle(this.vehicleId).then((data) => {
          console.log('data vehclbyid', data);
          this.vehicleToBeUpdated = data;
          console.log('vhcltobupdt', this.vehicleToBeUpdated);
          this.setFormValues(this.vehicleToBeUpdated);
        }).catch((error: HttpErrorResponse) => {
          console.log('error while vhclebyid', error);
          // this.toastr.error(error.error.message, 'Alert');
        });

       }
    });
  }

  setFormValues(vehicle: Vehicle): void {
    this.vehicleUpdateForm.patchValue({
      firstName: vehicle.firstName,
      lastName: vehicle.lastName,
      email: vehicle.email,
      carMake: vehicle.carMake,
      carModel: vehicle.carModel,
      manufacturedDate: vehicle.manufacturedDate,
      vinNumber: vehicle.vinNumber,
      ageOfVehicle: vehicle.ageOfVehicle
    });
  }


  updateVehicle(): void {
    console.log(this.vehicleUpdateForm.value);
    this.vehicleService.updateVehicle(
      this.vehicleId,
      this.vehicleUpdateForm.value.firstName,
      this.vehicleUpdateForm.value.lastName,
      this.vehicleUpdateForm.value.email
      ).then((data: Vehicle) => {
        this.vehicleUpdateForm.value.firstName = data.firstName;
        this.vehicleUpdateForm.value.lastName = data.lastName;
        this.vehicleUpdateForm.value.email = data.email;
        this.toastr.success('Vehicle updated succesfully', 'Alert');
        this.router.navigate(['/vehicle-list']);
      }).catch((error: HttpErrorResponse) => {
        console.log('error updatn', error);
        this.toastr.error(error.error.message, 'Alert');
      });
  }

}
