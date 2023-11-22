export class ChartDateData {
  constructor(datas) {
    this.datas = datas;
    this.dataSet = [];

    this.getAllDatas();
  }

  getAllDatas() {
    const items = Array.from(new Set(this.datas.map(element => element.item_type)))
      .sort((a, b) => a.localeCompare(b));


    items.forEach(item => {
      const labels = [];
      const datas = [];
      const years = Array.from(this.datas.filter(element => element.item_type === item));
      const arr = Array.from(new Set(years.map(year => {
        const date = new Date(year.order_date);
        return date.getFullYear();
      })))
        .sort((a, b) => a - b);
      for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        labels.push(i);
      }

      console.log(item);
      labels.forEach(label => {
        let totalSold = 0;
        const itemYear = years.filter(item => {
          const d = new Date(item.order_date);
          return d.getFullYear() === label;
        });
        console.log(label, itemYear);
        if (itemYear.length === 0)
          datas.push(0);
        else {
          totalSold = Array.from(itemYear.map(item => item.units_sold)
          )
            .reduce((total, currentVal) => total + currentVal, 0);
          datas.push(totalSold);
          console.log('eto', totalSold);
        }

      });
      this.dataSet.push({ name: item, labels: labels, datas: datas });
    });
  }

  getDataSet() {
    return this.dataSet;
  }

}