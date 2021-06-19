import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/Pet.model';
import { PetUpdateDto } from '../models/PetUpdate.dto';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseUrl = 'http://localhost:3000/services/pets';

  constructor(private http: HttpClient) { }

  registerPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseUrl, pet);
  }

  updatePet(petId: string, petUpdateDto: PetUpdateDto): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseUrl}/${petId}`, petUpdateDto);
  }

  getAllPets(): Promise<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl).toPromise();
  }

  findPet(petId: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/${petId}`);
  }

  deletePet(petId: string): Observable<HttpResponse<Pet>> {
    return this.http.delete<Pet>(`${this.baseUrl}/${petId}`, { observe: 'response'});
  }
}
