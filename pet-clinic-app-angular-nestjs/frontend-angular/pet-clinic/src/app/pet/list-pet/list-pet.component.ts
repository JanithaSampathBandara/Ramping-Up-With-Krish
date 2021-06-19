import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/Pet.model';
import { PetService } from 'src/app/services/pet.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit {

  allPets: Pet[];

  constructor(
    private petService: PetService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.petService.getAllPets().then((data: Pet[]) => {
      this.allPets = data;
    }).catch((error: HttpErrorResponse) => {
      this.allPets = null;
      this.toastr.error(error.error.message, 'Alert');
    });
  }

  loadRegistration(): void {
    this.router.navigate(['/register']);
  }

  loadUpdate(petId: string): void {
    this.router.navigate(['/update', petId]);
  }

  deletePet(petId: string): void {
    this.petService.deletePet(petId).subscribe({
      next: (data: HttpResponse<Pet>) => {
        this.toastr.success(`Pet deleted Successfully!! (${data.statusText})`, 'Alert');
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        this.toastr.error(`Pet deletion failed!! (${error.error.message})`, 'Alert');
      }
    });
  }
}
