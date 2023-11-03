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

      const DuplicatedCountries = [];
      Array.from(this.datas.filter(element => element.region === region))
        .sort((a, b) => a.country.localeCompare(b.country))
        .forEach(element => DuplicatedCountries.push(element));

      const totalSold = Array.from(DuplicatedCountries.map(element => element.units_sold))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

      const countries = Array.from(new Set(DuplicatedCountries.map(country => country.country)));
      this.regionStats.push({ name: region, 'Number of Countries': countries.length, 'Total sold': totalSold })
    });
  }

  getRegionStats() {
    return this.regionStats;
  }
}