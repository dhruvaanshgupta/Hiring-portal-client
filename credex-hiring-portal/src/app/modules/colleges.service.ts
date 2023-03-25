import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Recieve } from 'src/interfaces/recieve.interface';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {

  constructor(private http: HttpClient) {}

  addCollege(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/hiring_portal_war/colleges/create', data);
  }

  updateCollege(data: any): Observable<any> {
    return this.http.put<Recieve>(`http://localhost:8080/hiring_portal_war/colleges/update`, data);
  }

  getCollegesList(): Observable<any> {
    return this.http.get('http://localhost:8080/hiring_portal_war/colleges/all');
  }


  deleteCollege(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/hiring_portal_war/colleges/delete/${id}`);
  }
}