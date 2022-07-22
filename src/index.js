import './index.css';
import 'lodash';
import render from './modules/renderApi.js';
import { postApi, getApi } from './modules/apiImplement.js';

const urlGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/f5n9vuYoe82B6F8funh2/scores/';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh');
const table = document.getElementById('score-table');

refresh.addEventListener('click', () => {
  getApi(urlGame).then((response) => {
    table.innerHTML = '';
    render(response.result);
  });
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postApi(urlGame);
  e.target.reset();
});
getApi(urlGame).then((res) => {
  render(res.result);
});
