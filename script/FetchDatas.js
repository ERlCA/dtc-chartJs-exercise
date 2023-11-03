URL = './sales_100.json';

export const fetchData = new class FetchData {
  constructor(url) {
    this.url = url;
  }

  async fetchingData() {
    try {
      const res = await fetch(this.url);
      if (!res.ok)
        throw new Error('An error occured ' + res.status);

      const datas = await res.json();
      return datas.sales_100;

    } catch (err) {
      'Fecth error : ' + err;
    }
  }
}(URL)