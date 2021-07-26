import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle-update/vehicle-update.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [VehicleListComponent, VehicleUpdateComponent, FileUploadComponent],
  imports: [
    NgbModule,
    NgbPaginationModule,
    CommonModule,
    ReactiveFormsModule
  /*RouterModule.forRoot([
      {path: 'vehicle-list', component: VehicleListComponent},
      {path: 'vehicle-update/:id', component: VehicleUpdateComponent},
      {path: 'home', component: HomeComponent},
      {path: 'file-upload', component: FileUploadComponent}
    //  {path: 'vehicle-register', component: }
    ])*/
  ]
})
export class VehicleModule { }
