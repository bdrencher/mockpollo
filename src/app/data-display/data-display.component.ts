import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit, AfterViewInit {

  @ViewChild('cumulativeChart') cumulativeChild: ElementRef;
  cumulativeChart: Chart
  cumulativeContext: CanvasRenderingContext2D;

  @ViewChild('detailedChart') detailedChild: ElementRef;
  detailedChart: Chart;
  detailedContext: CanvasRenderingContext2D;

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          suggestedMax: 100
        }
      }]
    }
  };

  barGreen = 'rgba(29, 166, 40, 0.6)';
  barYellow = 'rgba(249, 224, 33, 0.6)';;
  barRed = 'rgba(176, 20, 25, 0.6)'

  pointGreen = 'rgba(29, 166, 40, 1)';
  pointYellow = 'rgba(249, 224, 33, 1)';
  pointRed = 'rgba(176, 20, 25, 1)';

  constructor() { }

  ngAfterViewInit(): void {
    this.cumulativeContext = this.cumulativeChild.nativeElement.getContext('2d');
    this.cumulativeChart = new Chart(this.cumulativeContext, {
      type: "bar",
      data: {
        datasets: [{
          label: "Category 1",
          data: [10, 20, 30, 40],
          backgroundColor: [
            'rgba(29, 166, 40, 0.6)',
            'rgba(29, 166, 40, 0.6)',
            'rgba(249, 224, 33, 0.6)',
            'rgba(249, 224, 33, 0.6)'
          ],
          borderColor: [
            'rgba(191, 55, 55, 0.2)',
            'rgba(191, 55, 55, 0.2)',
            'rgba(144, 103, 153, 0.2)',
            'rgba(144, 103, 153, 0.2)'
          ]
        }, {
          label: "Category 2",
          data: [15, 25, 40, 60],
          backgroundColor: [
            'rgba(185, 195, 212, 0.2)'
          ],
          pointBackgroundColor: [
            'rgba(29, 166, 40, 1)',
            'rgba(29, 166, 40, 1)',
            'rgba(249, 224, 33, 1)',
            'rgba(176, 20, 25, 1)'
          ],
          pointBorderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          pointRadius: 6,
          type: "line"
        }],
        labels: ['3 weeks ago', '2 weeks ago', 'last week', 'this week']
      },
      options: this.options
    });

    this.detailedContext = this.detailedChild.nativeElement.getContext('2d');
    this.detailedChart = new Chart(this.detailedContext, {
      type: "bar",
      data: {
        datasets: [{
          label: "Category 1A",
          data: [68, 35, 20, 30],
          backgroundColor: [
            this.barRed,
            this.barYellow,
            this.barGreen,
            this.barGreen
          ],
          borderColor: [
            'rgba(191, 55, 55, 0.2)',
            'rgba(191, 55, 55, 0.2)',
            'rgba(144, 103, 153, 0.2)',
            'rgba(144, 103, 153, 0.2)'
          ]
        }, {
          label: "Category 1B",
          data: [24, 40, 50, 10],
          backgroundColor: [
            this.barGreen,
            this.barYellow,
            this.barYellow,
            this.barGreen
          ],
          borderColor: [
            'rgba(191, 55, 55, 0.2)',
            'rgba(191, 55, 55, 0.2)',
            'rgba(144, 103, 153, 0.2)',
            'rgba(144, 103, 153, 0.2)'
          ]
        }, {
          label: "Category 1C",
          data: [8, 18, 35, 74],
          backgroundColor: [
            this.barGreen,
            this.barGreen,
            this.barYellow,
            this.barRed
          ],
          borderColor: [
            'rgba(191, 55, 55, 0.2)',
            'rgba(191, 55, 55, 0.2)',
            'rgba(144, 103, 153, 0.2)',
            'rgba(144, 103, 153, 0.2)'
          ]
        }, {
          label: "Category 1D",
          data: [3, 12, 15, 20],
          backgroundColor: [
            this.barGreen,
            this.barGreen,
            this.barGreen,
            this.barGreen
          ],
          borderColor: [
            'rgba(191, 55, 55, 0.2)',
            'rgba(191, 55, 55, 0.2)',
            'rgba(144, 103, 153, 0.2)',
            'rgba(144, 103, 153, 0.2)'
          ]
        }, {
          label: "Category 1E",
          data: [34, 20, 50, 25],
          backgroundColor: [
            this.barYellow,
            this.barGreen,
            this.barYellow,
            this.barGreen
          ],
          borderColor: [
            'rgba(191, 55, 55, 0.2)',
            'rgba(191, 55, 55, 0.2)',
            'rgba(144, 103, 153, 0.2)',
            'rgba(144, 103, 153, 0.2)'
          ]
        }, {
          label: "Category 2A",
          data: [15, 25, 40, 60],
          backgroundColor: [
            'rgba(103, 42, 178, 0.2)'
          ],
          pointBackgroundColor: [
            this.pointGreen,
            this.pointGreen,
            this.pointYellow,
            this.pointRed
          ],
          pointBorderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          pointRadius: 6,
          type: "line"
        }, {
          label: "Category 2B",
          data: [40, 60, 20, 10],
          backgroundColor: [
            'rgba(19, 176, 171, 0.2)'
          ],
          pointBackgroundColor: [
            this.pointYellow,
            this.pointRed,
            this.pointGreen,
            this.pointGreen
          ],
          pointBorderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          pointRadius: 6,
          type: "line"
        }, {
          label: "Category 2C",
          data: [100, 75, 50, 25],
          backgroundColor: [
            'rgba(184, 40, 160, 0.2)'
          ],
          pointBackgroundColor: [
            this.pointRed,
            this.pointRed,
            this.pointYellow,
            this.pointGreen
          ],
          pointBorderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          pointRadius: 6,
          type: "line"
        }, {
          label: "Category 2D",
          data: [14, 20, 12, 8],
          backgroundColor: [
            'rgba(54, 93, 65, 0.2)'
          ],
          pointBackgroundColor: [
            this.pointGreen,
            this.pointGreen,
            this.pointGreen,
            this.pointGreen
          ],
          pointBorderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          pointRadius: 6,
          type: "line"
        }],
        labels: ['3 weeks ago', '2 weeks ago', 'last week', 'this week']
      },
      options: this.options
    })
  }

  ngOnInit(): void {
  }

}