const dayElement = document.querySelector('.day');
const hourElement = document.querySelector('.hour');
const minutElement = document.querySelector('.minut');
const secondElement = document.querySelector('.second');

const endTime = new Date(Date.now() - 163 * 24 * 60 * 60 * 1000); // 163 days

setInterval(() => {
  const now = new Date();
  const timeRemaining = endTime - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  dayElement.textContent = days;
  hourElement.textContent = hours;
  minutElement.textContent = minutes;
  secondElement.textContent = seconds;
}, 1000);