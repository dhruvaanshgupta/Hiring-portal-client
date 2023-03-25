import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  deleteStudent(id: number) {
    throw new Error('Method not implemented.');
  }
  getStudentData() {
    throw new Error('Method not implemented.');
  }

  students = [
    {
      id: 1,
      status: 'Active',
      email: 'student1@example.com',
      password: 'password1',
      FirstName: 'John',
      LastName: 'Doe',
      roleId: 1,
      language: 'Java',
      Experience: '2 years',
    },
    {
      id: 2,
      status: 'Inactive',
      email: 'student2@example.com',
      password: 'password2',
      FirstName: 'Jane',
      LastName: 'Doe',
      roleId: 2,
      language: 'C#',
      Experience: '1 year',
    },
    {
      id: 3,
      status: 'Active',
      email: 'student3@example.com',
      password: 'password3',
      FirstName: 'Bob',
      LastName: 'Smith',
      roleId: 3,
      language: 'Java',
      Experience: '3 years',
    },
    {
      id: 4,
      status: 'Inactive',
      email: 'student4@example.com',
      password: 'password4',
      FirstName: 'Alice',
      LastName: 'Smith',
      roleId: 2,
      language: 'C#',
      Experience: '4 years',
    },
    {
      id: 5,
      status: 'Active',
      email: 'student5@example.com',
      password: 'password5',
      FirstName: 'Tom',
      LastName: 'Jones',
      roleId: 3,
      language: 'C#',
      Experience: '2 years',
    },
    {
      id: 6,
      status: 'Inactive',
      email: 'student6@example.com',
      password: 'password6',
      FirstName: 'Alice',
      LastName: 'Smith',
      roleId: 2,
      language: 'C#',
      Experience: '4 years',
    },
  ];
  constructor(private http: HttpClient) {}

  getStudentList(): Observable<any> {
    return this.http.get('http://localhost:8080/hiring_portal_war/user/get');
  }
}
