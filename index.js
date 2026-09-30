function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay) {
  return `Good ${timeOfDay}`;
}
function createGreeting(firstName, lastName, timeOfDay) {
  return `${getGreeting(timeOfDay)} ${formatName(firstName, lastName)}`;
}

console.log(createGreeting("Ava", "Stone", "morning"));
