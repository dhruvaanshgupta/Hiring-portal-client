import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = 'https://api.sendgrid.com/v3/mail/send'; 
  private apiKey = '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'; 

  constructor(private http: HttpClient) {}

  sendEmail(data : any): Observable<any> {
    // const body = {
    //   personalizations: [
    //     {
    //       to: [
    //         {
    //           email: 'dhruv5252@gmail.com' 
    //         }
    //       ],
    //       subject: subject
    //     }
    //   ],
    //   from: {
    //     email: email,
    //     name: name
    //   },
    //   content: [
    //     {
    //       type: 'text/plain',
    //       value: message
    //     }
    //   ]
    // };
    // const headers = {
    //   'Authorization': `Bearer ${this.apiKey}`,
    //   'Content-Type': 'application/json'
    // };
    return this.http.post<any>(this.url, data);
  }
}
