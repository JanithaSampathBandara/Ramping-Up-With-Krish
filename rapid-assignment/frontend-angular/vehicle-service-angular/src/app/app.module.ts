import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FileUploadComponent } from './vehicle/file-upload/file-upload.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { VehicleModule } from './vehicle/vehicle.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    NgbPaginationModule,
    VehicleModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'vehicle-list', component: VehicleListComponent},
      {path: 'vehicle-update/:id', component: VehicleUpdateComponent},
      {path: 'home', component: HomeComponent},
      {path: 'file-upload', component: FileUploadComponent}
    //  {path: 'vehicle-register', component: }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
