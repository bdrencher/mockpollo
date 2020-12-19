import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CollectUserDataComponent } from './collect-user-data/collect-user-data.component';
import { LongQuestionnaireComponent } from './long-questionnaire/long-questionnaire.component';
import { ShortQuestionnaireComponent } from './short-questionnaire/short-questionnaire.component';
import { DailyQuestionnaireComponent } from './daily-questionnaire/daily-questionnaire.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    CollectUserDataComponent,
    LongQuestionnaireComponent,
    ShortQuestionnaireComponent,
    DailyQuestionnaireComponent,
    DataDisplayComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }