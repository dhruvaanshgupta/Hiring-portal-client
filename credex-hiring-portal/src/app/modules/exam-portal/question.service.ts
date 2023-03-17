import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recieve } from 'src/interfaces/recieve.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient){}

  getQuestionJson(){
    return this.http.get<any>("../../../assets/questions.json");
  }

  updateUserPoints(points: number, id: number) {
    const url = `http://localhost:3000/scorecard/${id}`;
    const body = { points };
    return this.http.put(url, body);
  }
  
}
