// Simple search button action
document.getElementById('search-btn').addEventListener('click', function() {
  const what = document.getElementById('search-what').value;
  const where = document.getElementById('search-where').value;

  if (what && where) {
    alert(`Searching for ${what} in ${where}...`);
  } else {
    alert('Please enter both fields before searching!');
  }
});