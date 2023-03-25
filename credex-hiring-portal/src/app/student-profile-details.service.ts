import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentProfileDetailsService {
  getStudentProfileDetailsbyId: any;
  getStudentProfileDetailsById(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/students';

  getStudentProfileDetails(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }
}
