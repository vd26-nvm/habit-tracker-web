const habitForm = document.getElementById('habit-form');
const habitList = document.getElementById('habit-list');
let habits = [];

habitForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('habit-name').value;
  const frequency = document.getElementById('habit-frequency').value;

  if (!name || !frequency) return;

  const habit = {
    id: Date.now(),
    name,
    frequency
  };

  habits.push(habit);
  renderHabits();
  habitForm.reset();
});

function renderHabits() {
  habitList.innerHTML = '';
  habits.forEach(habit => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${habit.name} (${habit.frequency})
      <button onclick="deleteHabit(${habit.id})">Delete</button>
    `;
    habitList.appendChild(li);
  });
}

function deleteHabit(id) {
  habits = habits.filter(habit => habit.id !== id);
  renderHabits();
}
