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

  apiurl='http://localhost:3000/user'

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
  GetUserrole(){
    return sessionStorage.getItem('roleId')!=null?sessionStorage.getItem('roleId')?.toString():'';
  }
  navigate(){
    // const role = sessionStorage.getItem('roleId');
    // if(role === 'Admin'){
      this.router.navigate(['dashboard']);
    // }
    // else if(role === 'Student'){
      // console.log(role);
      // this.router.navigate(['colleges']);
    }
    // else (role === 'recruiter'){
      // this.router.navigate(['colleges'])
    // }
  // }
}
