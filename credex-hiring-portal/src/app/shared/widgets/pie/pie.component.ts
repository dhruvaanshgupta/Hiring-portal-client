import { Component, OnInit, Input } from '@angular/core';
import * as echarts from 'echarts';
import { DashboardService } from '../../../modules/dashboard.service';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor(private dashboardService: DashboardService){}

  ngOnInit(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    this.dashboardService.pieChart().subscribe(data => {
      const option = {
        title: {
          text: 'Offers Made',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    });
  }

  // @Input() data: Observable<any[]> = of([]);

  // @Input() title: string;

  // chartClassName = 'chart-container';

  // ngOnInit(): void {
  //   this.createChart();
  // }

  // createChart(): void {
  //   const chartContainer = document.createElement('div');
  //   chartContainer.id = this.chartClassName;
  //   document.getElementById('chart-container-wrapper').appendChild(chartContainer);

  //   this.data.subscribe(data => {
  //     const chart = echarts.init(chartContainer);

  //     chart.setOption({
  //       title: {
  //         text: this.title
  //       },
  //       tooltip: {
  //         trigger: 'item',
  //         formatter: '{a} <br/>{b}: {c} ({d}%)'
  //       },
  //       series: [
  //         {
  //           name: 'Count',
  //           type: 'pie',
  //           radius: ['50%', '70%'],
  //           avoidLabelOverlap: false,
  //           label: {
  //             show: false,
  //             position: 'center'
  //           },
  //           emphasis: {
  //             label: {
  //               show: true,
  //               fontSize: '30',
  //               fontWeight: 'bold'
  //             }
  //           },
  //           labelLine: {
  //             show: false
  //           },
  //           data: this.data
  //         }
  //       ]
  //     });
  //   });
  // }
}
 