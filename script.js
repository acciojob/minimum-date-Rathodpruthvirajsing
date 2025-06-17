function minDate(dates) {
  // Convert each string to a Date object
  const dateObjects = dates.map(dateStr => new Date(dateStr.replace(/\//g, '-')));

  // Find the minimum date
  let min = dateObjects[0];
  for (let date of dateObjects) {
    if (date < min) {
      min = date;
    }
  }

  // Return as YYYY/MM/DD
  return min.toISOString().split('T')[0].replace(/-/g, '/');
}

function findMinDate() {
  const input = document.getElementById('dateInput').value;
  const dateArray = input.split(',').map(d => d.trim());

  if (dateArray.length === 0 || dateArray[0] === "") {
    document.getElementById('result').innerText = "Please enter valid dates.";
    return;
  }

  const earliest = minDate(dateArray);
  document.getElementById('result').innerText = "Earliest Date: " + earliest;
}
