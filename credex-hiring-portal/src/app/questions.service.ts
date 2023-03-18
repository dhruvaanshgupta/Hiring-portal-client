import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http:HttpClient
  ) { }

  public getQuestions() {
    return this.http.get("http://localhost:3000/question")
  }
}
