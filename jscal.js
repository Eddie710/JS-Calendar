const calendar = document.querySelector('.calendar');
const monthName = calendar.querySelector('.month-name');
const daysContainer = calendar.querySelector('.days');
const prevButton = calendar.querySelector('.prev');
const nextButton = calendar.querySelector('.next');

let currentDate = new Date();

function updateCalendar() {
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  monthName.textContent = month + ' ' + year;

  daysContainer.innerHTML = '';

  const lastDay = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= lastDay; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    daysContainer.appendChild(dayDiv);
  }
}

prevButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

updateCalendar();
