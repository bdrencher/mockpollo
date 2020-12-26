import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-questionnaire',
  templateUrl: './daily-questionnaire.component.html',
  styleUrls: ['./daily-questionnaire.component.css']
})
export class DailyQuestionnaireComponent implements OnInit {

  journalEntryDate: FormControl;
  eventEntry: FormControl;
  weatherEntry: FormControl;

  constructor(private router: Router) { }

  submitJournalEntry() {
    this.router.navigate(['/dashboard'])
  }

  ngOnInit(): void {
  }

}
