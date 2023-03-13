import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.scss'],
})
export class DrivesComponent {
  questionaireCategory = [
    {
      questionaire_id: 1,
      year: 2020,
      drive_id: 1,
      questionaire: 'this is a questionaire',
    },
    {
      questionaire_id: 2,
      year: 2021,
      drive_id: 2,
      questionaire: 'this is a questionaire',
    },
    {
      questionaire_id: 3,
      year: 2022,
      drive_id: 3,
      questionaire: 'this is a questionaire',
    }
  ];
}
