import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-questionnaire',
  templateUrl: './long-questionnaire.component.html',
  styleUrls: ['./long-questionnaire.component.css']
})
export class LongQuestionnaireComponent implements OnInit {

  questionsData = [
    {description: "Dogs are better than cats"},
    {description: "Live christmas trees are better than fake ones"},
    {description: "Being too cold is better than being too hot"},
    {description: "Apple MacOS is better than Microsoft Windows"},
    {description: "Android devices are better than similar Apple devices"},
    {description: "I prefer evergreen trees to any other group of trees"},
    {description: "Staying at home for Christmas is better than traveling"},
    {description: "Working at home is better than working in a corporate office"},
    {description: "Movies are more entertaining than video games"},
    {description: "Golf is more interesting to watch than Basketball"},
    {description: "eSports are more interesting than physical sports"},
    {description: "Most of the new television shows are unoriginal"},
    {description: "Space exploration is a waste of time and money"},
    {description: "ARM based processors will eventually replace x86 based processors"},
    {description: "Ice cream is better than cake"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
