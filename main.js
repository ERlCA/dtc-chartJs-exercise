import { fetchData } from './script/FetchDatas.js';
import { DatasExtraction } from './script/DatasExtraction.js';
import { DisplayDatas } from './script/DisplayDatas.js';
import { ChartJs } from './script/ChartJs.js';
import { ChartDateData } from './script/ChartDateData.js';
import { ChartDate } from './script/ChartDate.js';

(async () => {
  const datas = []
  await fetchData.fetchingData()
    .then(results => results.forEach(element => {
      datas.push(element)
    }));

  const datasExtraction = new DatasExtraction(datas);
  const chartDateData = new ChartDateData(datas);
  const displayDatas = new DisplayDatas();
  const btns = document.querySelectorAll('button');
  const chartJs = new ChartJs(datasExtraction.getRegionStats());
  const chartDate = new ChartDate(chartDateData.getDataSet());

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      switch (btn.id) {
        case 'btn-statistics':
          displayDatas.render(datasExtraction.getRegionStats());
          break;

        case 'btn-chartjs':
          chartJs.render();
          break;

        case 'btn-date':
          chartDate.getDate();
          break;
      }
    });
  })
})()
