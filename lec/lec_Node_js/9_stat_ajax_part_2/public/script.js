function loadData() {
  fetch("/data") 
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    })
    .catch(error => console.error(error));
}
