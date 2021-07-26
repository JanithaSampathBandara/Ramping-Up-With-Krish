import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  allVehicles: Vehicle[] = [];
  pageNumber = 1;
  offset = 0;
  pageSize = 10;
  totalCount = 0;

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getAllVehiclesPaginated();
    /*
    this.vehicleService.getAllVehicles().then((data: Vehicle[]) => {
      console.log('retr vehicls', data);
      this.allVehicles = data;
      // this.allVehicles = [...data];
      console.log('alvehhiclesarray', this.allVehicles);
    }).catch((error) => {
      console.log('error while retrievng', error);
    });
    */
  }

  loadUpdate(id: number): void {
    this.router.navigate(['/vehicle-update', id]);
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).then((data) => {
      console.log('deleted vehicl id', data);
      this.toastr.success('Vehicle deleted succesfully', 'Alert');
      this.ngOnInit();
    }).catch((error) => {
      console.log('error while deleting', error);
      this.toastr.error(error.error.message, 'Alert');
    });
  }

  getAllVehiclesPaginated(): void {
    this.offset = (this.pageNumber - 1) * this.pageSize;
    this.vehicleService.getAllVehiclesPaginated(this.pageSize, this.offset).then((data) => {
      console.log('all paginated', data);
      this.totalCount = data.getAllVehiclesPaginated.totalCount;
      this.allVehicles = data.getAllVehiclesPaginated.nodes;
    }).catch((error) => {
      console.log('error while paginated', error);
    });
  }

  pageChange(): void {
    this.getAllVehiclesPaginated();
  }

}
