import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
