import { fetchData } from './script/FetchDatas.js';
import { DatasExtraction } from './script/DatasExtraction.js';
import { DisplayDatas } from './script/DisplayDatas.js';
import { ChartJs } from './script/ChartJs.js';

(async () => {
  const datas = []
  await fetchData.fetchingData()
    .then(results => results.forEach(element => {
      datas.push(element)
    }));

  const datasExtraction = new DatasExtraction(datas);
  const displayDatas = new DisplayDatas();
  const btns = document.querySelectorAll('button');
  const chartJs = new ChartJs(datasExtraction.getRegionStats());
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.id === 'btn-statistics') {
        displayDatas.render(datasExtraction.getRegionStats());
      } else {
        chartJs.render();
        console.log('chart');
      }
    });
  })
})()