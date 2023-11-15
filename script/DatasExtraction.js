export class DatasExtraction {
  constructor(datas) {
    this.datas = datas;
    this.regionStats = [];
    this.setRegionStats();
  }

  setRegionStats() {
    const regions = Array.from(new Set(this.datas.map(element => element.region)))
      .sort((a, b) => a.localeCompare(b));
    regions.forEach(region => {

      const duplicatedCountries = [];
      Array.from(this.datas.filter(element => element.region === region))
        .sort((a, b) => a.country.localeCompare(b.country))
        .forEach(element => duplicatedCountries.push(element));

      const totalSold = Array.from(duplicatedCountries.map(element => element.units_sold))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

      const countries = Array.from(new Set(duplicatedCountries.map(country => country.country)));
      const averageTime = Array.from(duplicatedCountries.map(country => {
        let diff = new Date(country.ship_date) - new Date(country.order_date);
        let date = new Date(diff);
        return date.getDate();
      }))
        .reduce((averageT, currentValue) => averageT + currentValue, 0,) / (duplicatedCountries.length + 1);
      this.regionStats.push({ name: region, 'Number of Countries': countries.length, 'Average Time': Math.round(averageTime), 'Total sold': totalSold });
    });
  }

  getRegionStats() {
    return this.regionStats;
  }
}