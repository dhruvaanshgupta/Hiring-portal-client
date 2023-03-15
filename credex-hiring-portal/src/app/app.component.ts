import { Component, DoCheck } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
//   title = 'credex-hiring-portal';
//   isadminuser=false;
//   isstudentuser=false;
//   isrecruiteruser=false;

// constructor(private service:AuthService){}

// ngDoCheck(): void {
//     // if(this.service.GetUserrole()==='Admin'){
//     //   this.isadminuser=true;
//     // }else{
//     //   this.isadminuser=false;
//     // }
//     switch(this.service.GetUserrole()) { 
//       case 'Admin': { 
//         this.isadminuser=true;
//         this.isstudentuser=false;
//         this.isrecruiteruser=false; 
//          break; 
//       } 
//       case 'Recruiter': { 
//         this.isadminuser=false; 
//         this.isstudentuser=false;
//         this.isrecruiteruser=true;
//          break; 
//       } 
//       default: { 
//         this.isadminuser=false;
//         this.isstudentuser=true; 
//         this.isrecruiteruser=false;
//          break; 
//       } 
//    } 
//   }
}
