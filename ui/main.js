import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click to get albums
    </p>
    <table id="gable">
      <tr>
          <th onclick="sortTable(0)"><span class="glyphicon glyphicon-sort"></span>&nbsp&nbspALBUMS</th>
      </tr>
    </table>
  </div>
`

setupCounter(document.querySelector('#counter'), document.querySelector('#gable'))
