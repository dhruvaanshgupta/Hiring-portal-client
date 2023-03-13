import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent {

  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  constructor(
    private _route: ActivatedRoute
  ) {}
}
