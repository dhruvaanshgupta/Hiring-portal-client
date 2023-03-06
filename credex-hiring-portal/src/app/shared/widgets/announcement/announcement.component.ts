import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  announcements: any[];
  newAnnouncementTitle: string;
  newAnnouncementMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.announcements = [
      {
        title: 'New Feature Release',
        message: 'We have just released a new feature for our admin dashboard!',
        date: new Date('2023-03-05')
      },
      {
        title: 'Upcoming Maintenance',
        message: 'Our servers will be undergoing maintenance on March 10th, from 2:00AM to 4:00AM EST.',
        date: new Date('2023-03-05')
      }
    ];
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  postAnnouncement() {
    const newAnnouncement = {
      title: this.newAnnouncementTitle,
      message: this.newAnnouncementMessage,
      date: new Date()
    };
    this.announcements.unshift(newAnnouncement);
    
    this.newAnnouncementTitle = '';
    this.newAnnouncementMessage = '';
  }
  
  
}