import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = 'http://localhost:3001/file/upload';

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(this.baseUrl, formData);
  }
}
