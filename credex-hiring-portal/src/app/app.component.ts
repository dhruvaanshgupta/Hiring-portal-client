import { Component, DoCheck } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  
  title = 'credex-hiring-portal';
  isadminuser=false;

constructor(private service:AuthService){}

ngDoCheck(): void {
    if(this.service.GetUserrole()==='Admin'){
      this.isadminuser=true;
    }else{
      this.isadminuser=false;
    }
  }
}
