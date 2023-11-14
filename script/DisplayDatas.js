export class DisplayDatas {
  render(datas) {
    const container = document.querySelector('.contents');
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Region</th>
        <th>Number of countries</th>
        <th>Ship time (Day)</th>
        <th>Total Sold</th>
      </tr>
    `;

    container.innerHTML = '';
    datas.forEach(element => {
      table.innerHTML += `
        <tr>
          <td>${element.name}</td>
          <td>${element['Number of Countries']}</td>
          <td>${element['Average Time']}</td>
          <td>${element['Total sold']}</td>
        </tr>
      `;
    });
    container.appendChild(table);
  }
}