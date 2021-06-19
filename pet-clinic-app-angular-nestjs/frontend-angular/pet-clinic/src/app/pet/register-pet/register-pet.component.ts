import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/Pet.model';
import { PetService } from 'src/app/services/pet.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.scss']
})
export class RegisterPetComponent implements OnInit {

  createdPet: Pet;
  formErrors: string[];

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    category: new FormControl('')
  });

  constructor(
    private petService: PetService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerPet(): void {

    const newPet = new Pet(
      this.registerForm.value.name,
      this.registerForm.value.breed,
      this.registerForm.value.color,
      this.registerForm.value.weight,
      this.registerForm.value.dob,
      this.registerForm.value.category
    );

    this.petService.registerPet(newPet).subscribe({
      next: (data: Pet) => {
        this.createdPet = data;
        this.toastr.success('Pet registered successfully!!', 'Alert');
        this.router.navigate(['/list']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.formErrors = error.error.message;
          this.toastr.error('Pet insertion failed!!', 'Alert');
        } else {
          this.formErrors = null;
          this.toastr.error(error.error.message, 'Alert');
        }
      }
    });
  }
}
