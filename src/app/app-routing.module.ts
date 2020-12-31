import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyQuestionnaireComponent } from './daily-questionnaire/daily-questionnaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { LongQuestionnaireComponent } from './long-questionnaire/long-questionnaire.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'longQuestionnaire', component: LongQuestionnaireComponent},
  {path: 'dailyQuestionnaire', component: DailyQuestionnaireComponent},
  {path: 'dataDisplay', component: DataDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
