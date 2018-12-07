import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-graph-operations2',
  templateUrl: './graph-operations2.component.html',
  styleUrls: ['./graph-operations2.component.scss']
})
export class GraphOperations2Component implements OnInit {

  @ViewChild('lineChart') chartRef;
  @Input() label: string;
  chart: any;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12', 'T13', 'T14', 'T15'],
        datasets: [
          {
            label: 'Data 1',
            data: [0, 10, 11, 13, 7, 8, 10, 15, 16, 17, 16, 14, 10, 8, 10],
            borderColor: '#00AEFF',
            fill: false
          },
          {
            label: 'Data 2',
            data: [5, 6, 8, 3, 4, 5, 4, 12, 16, 30, 31, 19, 17, 16, 12],
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        }
      }
    });
  }

}