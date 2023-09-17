export function setupCounter(element, tableElement) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `click count is ${counter}`
  }
  element.addEventListener('click', async () => {
    setCounter(counter + 1)

    for (let i = 0; i < 100000; i++) {
      const data = {};
      let start = data;
      for (let j = 0; j < 20; j++) {
        const next = "name" + i + j;
        start[next] = {};
        start = start[next];
      }
    }

    let response = await fetch('http://127.0.0.1:3000/albums')
    console.log(response)
    let data = await response.json()
    console.log(data)

    data.rows.forEach(function(object) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.Title + '</td>';
        tableElement.appendChild(tr);
    });

  })
  setCounter(0)
}
