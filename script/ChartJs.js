export class ChartJs {
  constructor(datas) {
    this.datas = datas;
    this.labels = [];
    this.ratio = [];
    this.extractDatas();

  }

  extractDatas() {
    const totalCountry = Array.from(this.datas.map(element => {
      this.labels.push(element['name']);
      return element['Number of Countries'];
    }))
      .reduce((total, currentValue) => total + currentValue, 0,);
    this.datas.forEach(element => {
      let result = element['Number of Countries'] * 100 / totalCountry;
      this.ratio.push(Number(result.toFixed(2)));
    });
  }

  render() {
    const container = document.querySelector('.contents');
    const chartCanvas = document.createElement('canvas');
    container.innerHTML = '';
    container.appendChild(chartCanvas);
    chartCanvas.id = 'chart-js';

    new Chart(chartCanvas, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Dataset about % of each Regions',
          data: this.ratio,
          // backgroundColor: Object.values(Utils.CHART_COLORS),
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '% of each Regions'
          }
        }
      },
    });

    console.log('render');
  }
}