import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public userAuthService: AuthService,
    private router: Router){}
  public emailId: string = '';
  public role: string = '';
  checker:any;
  ngOnInit(): void {
    this.emailId = sessionStorage.getItem('emailId') || '';
    this.role = sessionStorage.getItem('roleId') || '';
  }
  
}
