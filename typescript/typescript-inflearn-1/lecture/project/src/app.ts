// utils
function $(selector: string) {
  return document.querySelector(selector);
}
function getUnixTimestamp(date: string | number | Date) {
  return new Date(date).getTime();
}

// DOM
// Element < HTMLElement < HTMLParagraphElement
// 타입 계쏙 상속받아 점점 구체화된다.
// 값은 Element인데, 변수에 HTMLParagraphElement라고 타입 명시하면, 변수가 가지고있는 값이 더 구체적이므로 타입에러난다.
const confirmedTotal = $('.confirmed-total') as HTMLSpanElement; // 타입 assertion해주면 해당 변수의 타입도 해당 타입이된다.
const deathsTotal = $('.deaths') as HTMLParagraphElement;
const recoveredTotal = $('.recovered') as HTMLParagraphElement;
const lastUpdatedTime = $('.last-updated-time') as HTMLParagraphElement;
// const rankList:HTMLLIElement = $('.rank-list'); // 값은 `Element`, 변수의 타입은 Element를 구체화한 HTMLLiElement
const deathsList = $('.deaths-list');
const recoveredList = $('.recovered-list');
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id: string) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', id);
  wrapperDiv.setAttribute(
    'class',
    'spinner-wrapper flex justify-center align-center',
  );
  const spinnerDiv = document.createElement('div');
  spinnerDiv.setAttribute('class', 'ripple-spinner');
  spinnerDiv.appendChild(document.createElement('div'));
  spinnerDiv.appendChild(document.createElement('div'));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
}

// state
let isDeathLoading = false;
let isRecoveredLoading = false;

// api
function fetchCovidSummary() {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

enum CovisStatus {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths'
}

function fetchCountryInfo(countryCode: string, status: CovisStatus) {
  // status params: confirmed, recovered, deaths
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
}

// methods
function startApp() {
  setupData();
  initEvents();
}

// events
function initEvents() {
  rankList.addEventListener('click', handleListClick);
}

async function handleListClick(event : any) {
  let selectedId;
  if (
    event.target instanceof HTMLParagraphElement ||
    event.target instanceof HTMLSpanElement
  ) {
    selectedId = event.target.parentElement.id;
  }
  if (event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if (isDeathLoading) {
    return;
  }
  clearDeathList();
  clearRecoveredList();
  startLoadingAnimation();
  isDeathLoading = true;
  const { data: deathResponse } = await fetchCountryInfo(selectedId, CovisStatus.Deaths);
  const { data: recoveredResponse } = await fetchCountryInfo(
    selectedId,
    CovisStatus.Recovered,
  );
  const { data: confirmedResponse } = await fetchCountryInfo(
    selectedId,
    CovisStatus.Confirmed,
  );
  endLoadingAnimation();
  setDeathsList(deathResponse);
  setTotalDeathsByCountry(deathResponse);
  setRecoveredList(recoveredResponse);
  setTotalRecoveredByCountry(recoveredResponse);
  setChartData(confirmedResponse);
  isDeathLoading = false;
}

function setDeathsList(data: any) {
  const sorted = data.sort(
    (a: any, b: any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date),
  );
  sorted.forEach((value: any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'deaths');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    deathsList.appendChild(li);
  });
}

function clearDeathList() {
  deathsList.innerHTML = null;
}

function setTotalDeathsByCountry(data: any) {
  deathsTotal.innerText = data[0].Cases;
}

function setRecoveredList(data: any) {
  const sorted = data.sort(
    (a: any, b: any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date),
  );
  sorted.forEach((value: any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'recovered');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    recoveredList.appendChild(li);
  });
}

function clearRecoveredList() {
  recoveredList.innerHTML = null;
}

function setTotalRecoveredByCountry(data: any) {
  recoveredTotal.innerText = data[0].Cases;
}

function startLoadingAnimation() {
  deathsList.appendChild(deathSpinner);
  recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
  deathsList.removeChild(deathSpinner);
  recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
  const { data } = await fetchCovidSummary();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data);
}

function renderChart(data:any, labels: any) {
  var ctx = $('#lineChart').getContext('2d');
  Chart.defaults.color = '#f5eaea';
  Chart.defaults.font.family = 'Exo 2';
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Confirmed for the last two weeks',
          backgroundColor: '#feb72b',
          borderColor: '#feb72b',
          data,
        },
      ],
    },
    options: {},
  });
}

function setChartData(data:any) {
  const chartData = data.slice(-14).map((value: any) => value.Cases);
  const chartLabel = data
    .slice(-14)
    .map((value: any) => new Date(value.Date).toLocaleDateString().slice(5, -1));
  renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: any) {
  confirmedTotal.innerText = data.Countries.reduce(
    (total:any, current: any) => (total += current.TotalConfirmed),
    0,
  );
}

function setTotalDeathsByWorld(data: any) {
  deathsTotal.innerText = data.Countries.reduce(
    (total:any, current:any) => (total += current.TotalDeaths),
    0,
  );
}

function setTotalRecoveredByWorld(data: any) {
  recoveredTotal.innerText = data.Countries.reduce(
    (total:any, current: any) => (total += current.TotalRecovered),
    0,
  );
}

function setCountryRanksByConfirmedCases(data : any) {
  const sorted = data.Countries.sort(
    (a:any, b:any) => b.TotalConfirmed - a.TotalConfirmed,
  );
  sorted.forEach((value: any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item flex align-center');
    li.setAttribute('id', value.Slug);
    const span = document.createElement('span');
    span.textContent = value.TotalConfirmed;
    span.setAttribute('class', 'cases');
    const p = document.createElement('p');
    p.setAttribute('class', 'country');
    p.textContent = value.Country;
    li.appendChild(span);
    li.appendChild(p);
    rankList.appendChild(li);
  });
}

function setLastUpdatedTimestamp(data: any) {
  lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();
