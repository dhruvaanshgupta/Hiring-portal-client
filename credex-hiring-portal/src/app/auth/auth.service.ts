import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  (
    private http:HttpClient, 
    private router: Router) { }

  apiurl='http://localhost:3000/users'

  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(`${this.apiurl}?emailId=${code}`);
  }

  GetUserbyCode(emailId:any){
    return this.http.get(this.apiurl+'/'+emailId);
  }

  GetAllRole(){
    return this.http.get('http://localhost:3000/role');
  }

  Proceedregister(inputdata?:any){
    return this.http.post(this.apiurl,inputdata);
  }
  Updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('emailId')!=null;
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
      if(userRoles!=null && userRoles){
            console.log(userRoles);
            console.log(allowedRoles);
            if (userRoles === allowedRoles) {
              isMatch = true;
              return isMatch;
            } else {
              return isMatch;
            }
          }
        }
      

    

}
