import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends AppComponent implements OnInit {
  public emailId: string = '';
  public role: string = '';

  ngOnInit(): void {
    this.emailId = sessionStorage.getItem('emailId') || '';
    this.role = sessionStorage.getItem('roleId') || '';
    
  }
  
}
