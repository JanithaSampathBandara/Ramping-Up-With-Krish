import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/models/Pet.model';
import { PetUpdateDto } from 'src/app/models/PetUpdate.dto';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  updatedPet: Pet;
  petId: string;
  petToBeUpdated: Pet;
  formErrors: string[];

  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    breed: new FormControl(''),
    color: new FormControl(''),
    dob: new FormControl(Date),
    category: new FormControl('')
  });

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    // Subscribing to ActivatedRoute module's query param observable to access query parameters
    this.activatedRoute.paramMap.subscribe((params) => {
      this.petId = params.get('pid');

      if (this.petId) {
        this.petService.findPet(this.petId).subscribe({
          next: (data: Pet) => {
            this.petToBeUpdated = data;
            this.setFormValues(this.petToBeUpdated);
          },
          error: (error: HttpErrorResponse) => {
            this.toastr.error(error.error.message, 'Alert');
          }
        });
      }
    });
  }

  setFormValues(pet: Pet): void {
    this.updateForm.patchValue({
      name: pet.name,
      weight: pet.weight,
      breed: pet.breed,
      color: pet.color,
      dob: pet.dob,
      category: pet.category
    });
  }

  updatePet(): void {
    const petUpdateDto = new PetUpdateDto(this.updateForm.value.name, this.updateForm.value.weight);

    this.petService.updatePet(this.petId, petUpdateDto).subscribe({
      next: (updatedPet: Pet) => {
        this.updateForm.value.name = updatedPet.name;
        this.updateForm.value.weight = updatedPet.weight;
        this.toastr.success('Pet updated successfully!!', 'Alert');
        this.router.navigate(['/list']);
      },
      error: (error: HttpErrorResponse) => {
        this.formErrors = error.error.message;
        this.toastr.error('Pet updation failed!!', 'Alert');
      }
    });
  }
}
