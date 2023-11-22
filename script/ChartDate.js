export class ChartDate {
  constructor(datas) {
    this.dataSet = datas;
  }

  getDate() {
    const containerChart = document.querySelector('.contents');
    containerChart.innerHTML = '';
    containerChart.innerHTML = `
      <h2>Total sold for each Items</h2>
      `;

    for (let data of this.dataSet) {
      const div = document.createElement('div');
      div.className = 'chartdate-container';

      const id = data.name.split(' ')
        .map(el => el.toLowerCase())
        .join('-');

      div.innerHTML = `
        <h2>${data.name}</h2>
        <canvas id=${id} style="width:600px; height:350px"></canvas>
      `;

      containerChart.appendChild(div);

      const ctx = div.querySelector(`#${id}`).getContext('2d');
      const dataSet = {
        labels: data.labels,
        datasets: [{
          label: data.name,
          data: data.datas,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      new Chart(ctx, {
        type: 'line',
        data: dataSet
      });
    }

    // const div = document.createElement('div');
    // const ctx = document.createElement('canvas');
    // div.appendChild(ctx);
    // ctx.id = this.dataSet[0].name;
    // containerChart.appendChild(div);
    // const datas = {
    //   labels: this.dataSet[0].labels,
    //   datasets: [{
    //     label: this.dataSet[0].name,
    //     data: this.dataSet[0].datas,
    //     fill: false,
    //     borderColor: 'rgb(75, 192, 192)',
    //     tension: 0.1
    //   }]
    // };

    // new Chart(ctx, {
    //   type: 'line',
    //   datas
    // });
  }
}