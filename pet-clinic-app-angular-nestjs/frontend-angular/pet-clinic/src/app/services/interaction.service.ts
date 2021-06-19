import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pet } from '../models/Pet.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private subject = new Subject();
  source = this.subject.asObservable();

  constructor() { }

  setSource(pet: Pet): void {
    this.subject.next(pet);
  }
}
