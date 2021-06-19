import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListPetComponent } from './list-pet/list-pet.component';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from '../home/home.component';
import { RegisterOwnerComponent } from '../owner/register-owner/register-owner.component';


@NgModule({
  declarations: [
    ListPetComponent,
    RegisterPetComponent,
    UpdatePetComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'register', component: RegisterPetComponent},
      {path: 'update/:pid', component: UpdatePetComponent},
      {path: 'list', component: ListPetComponent},
      {path: 'home', component: HomeComponent},
      {path: 'register-owner', component: RegisterOwnerComponent}
    ]),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PetModule { }
