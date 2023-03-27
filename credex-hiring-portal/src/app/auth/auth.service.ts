import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Recieve } from '../../interfaces/recieve.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  (
    private http:HttpClient, 
    private router: Router) { }

  // apiurl='http://localhost:3000/users/'
  apiurl = 'http://localhost:8080/hiring_portal_war/user'

  requestHeader = new HttpHeaders();

  GetAll(){
    return this.http.get<any>(this.apiurl+'/get');
  }

  getAllStudentsCount() {
    return this.http.get<any[]>(this.apiurl+'/get').pipe(
      map(users => users.filter(user => user.roleId === "Student").length)
    );
  }

  getUserById(userId: any): Observable<any> {
    return this.http.get(this.apiurl +'/getById/'+ userId);
  }

  GetAllRole(){
    return this.http.get<Recieve>('http://localhost:8080/hiring_portal_war/role/get');
  }

  ProceedRegister(inputdata?:any){
    return this.http.post<any>(this.apiurl+'/register',inputdata);
  }

  public login(loginData){
    return this.http.post('http://localhost:8080/hiring_portal_war/api/login', loginData, {headers: this.requestHeader});
  }



  Updateuser(inputdata:any){
    return this.http.put<Recieve>(this.apiurl + '/update',inputdata)
  }

  IsloggedIn(){
    return sessionStorage.getItem('emailId')! && sessionStorage.getItem('token');
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

  public setRoles(roleId : string){
    sessionStorage.setItem("roleId",roleId)
  }

  navigate(){
    const role = sessionStorage.getItem('roleId');
    if(role === 'Admin'){
      this.router.navigate(['home/dashboard']);
    }
    else if(role === 'Student'){
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
