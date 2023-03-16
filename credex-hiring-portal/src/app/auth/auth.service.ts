import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Recieve } from '../../interfaces/recieve.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  (
    private http:HttpClient, 
    private router: Router) { }

  apiurl='http://localhost:3000/users/'

  GetAll(){
    return this.http.get<Recieve>(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(`${this.apiurl}?emailId=${code}`);
  }

  GetUserbyCode(emailId:any){
    return this.http.get(this.apiurl+'/'+emailId);
  }

  GetUser(id:any){
    return this.http.get<Recieve>(this.apiurl+'/'+id);
  }

  GetAllRole(){
    return this.http.get<Recieve>('http://localhost:3000/role');
  }

  Proceedregister(inputdata?:any){
    return this.http.post<Recieve>(this.apiurl,inputdata);
  }
  Updateuser(id:any,inputdata:any){
    return this.http.put<Recieve>(this.apiurl+'/'+id,inputdata)
  }
  UpdateUserByEmail(code:string, inputdata: any) {
    return this.http.put<Recieve>(`${this.apiurl}?emailId=${code}`, inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('emailId')!;
  }
 public GetUserrole(){
    return sessionStorage.getItem('roleId')!=null?sessionStorage.getItem('roleId')?.toString():'';
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  navigate(){
    const role = sessionStorage.getItem('roleId');
    if(role === 'Admin'){
      this.router.navigate(['home/dashboard']);
    }
    else if(role === 'Student'){
      console.log(role);
      this.router.navigate(['home/exam']);
    }
    // else (role === 'recruiter'){
      // this.router.navigate(['colleges'])
    // }
  }
  
   public roleMatch(allowedRoles: string):boolean {
      let isMatch = false;
      const userRoles: any = this.GetUserrole();
      if(userRoles){
            if (userRoles === allowedRoles) {
              isMatch = true;
              return isMatch;
            } else {
              return isMatch;
            }
          }
        }
      

    

}
