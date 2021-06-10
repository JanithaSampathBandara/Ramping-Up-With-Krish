import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnagramDto } from '../models/Anagram.dto';
import { NthLargestDto } from '../models/NthLargest.dto';
import { OccurencesDto } from '../models/Occurences.dto';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  private baseUrl = 'http://localhost:3000/services/algorithms';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public async getAnagrammability(anagramDto: AnagramDto){
    return await this.http.post(`${this.baseUrl}/anagram`, anagramDto).toPromise();
  }

  // tslint:disable-next-line:typedef
  public getNthLargestNumber(nthLargestDto: NthLargestDto){
    return this.http.post(`${this.baseUrl}/nth-largest`, nthLargestDto);
  }

  // tslint:disable-next-line:typedef
  public getOccurencesCount(occurencesDto: OccurencesDto){
    return this.http.post(`${this.baseUrl}/occurences`, occurencesDto);
  }


}
