import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectUserDataComponent } from './collect-user-data/collect-user-data.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DailyQuestionnaireComponent } from './daily-questionnaire/daily-questionnaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { LoginComponent } from './login/login.component';
import { LongQuestionnaireComponent } from './long-questionnaire/long-questionnaire.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'longQuestionnaire', component: LongQuestionnaireComponent},
  {path: 'dailyQuestionnaire', component: DailyQuestionnaireComponent},
  {path: 'dataDisplay', component: DataDisplayComponent},
  {path: 'collectData', component: CollectUserDataComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
