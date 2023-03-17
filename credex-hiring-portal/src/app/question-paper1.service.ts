import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionPaper1Service {
  constructor(private http: HttpClient) {}
  getQuestions(): Observable<any> {
    return this.http.get('http://localhost:3000/questions');
  }
}
