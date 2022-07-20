import './index.css';

const players = [
  {
    name: 'Karam',
    score: 100,
  },
  {
    name: 'Aly',
    score: 60,
  },
  {
    name: 'Toleen',
    score: 12,
  },
  {
    name: 'Mohamed',
    score: 40,
  },
  {
    name: 'Bayanssy',
    score: 20,
  },
  {
    name: 'Nada',
    score: 55,
  },
];

const render = () => {
  const table = document.getElementById('score-table');
  players.forEach((player, index) => {
    const { name, score } = player;
    table.innerHTML += `<tr id="user-${index}">
        <td id="name-${index}">${name}</td>
        <td id="score-${index}">${score}</td>
        </tr>`;
  });
};

render();
