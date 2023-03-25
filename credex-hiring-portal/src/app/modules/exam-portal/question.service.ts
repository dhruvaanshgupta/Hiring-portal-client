import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recieve } from 'src/interfaces/recieve.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient){}
  

  getQuestionJson(){
    return this.http.get<any>("http://localhost:3000/questions");
  }

  updateUserPoints(data) {
    const url = `http://localhost:8080/hiring_portal_war/score/create`;
    return this.http.post(url, data);
  }
  
  

  }
  
