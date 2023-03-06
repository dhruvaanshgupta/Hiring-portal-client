import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'On Campus',
      y: 70,
      sliced: true,
      selected: true
    }, {
      name: 'Off Campus',
      y: 30
    }];
  }
}
