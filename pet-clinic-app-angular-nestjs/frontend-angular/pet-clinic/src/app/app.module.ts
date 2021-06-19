import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListPetComponent } from './pet/list-pet/list-pet.component';
import { PetModule } from './pet/pet.module';
import { RegisterPetComponent } from './pet/register-pet/register-pet.component';
import { UpdatePetComponent } from './pet/update-pet/update-pet.component';
import { HomeComponent } from './home/home.component';
import { OwnerModule } from './owner/owner.module';
import { RegisterOwnerComponent } from './owner/register-owner/register-owner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    PetModule,
    OwnerModule,
    RouterModule.forRoot([
      {path: 'register', component: RegisterPetComponent},
      {path: 'update/:pid', component: UpdatePetComponent},
      {path: 'list', component: ListPetComponent},
      {path: 'home', component: HomeComponent},
      {path: 'register-owner', component: RegisterOwnerComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
