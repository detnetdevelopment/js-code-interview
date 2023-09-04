import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello!</h1>
  </div>
`

setupCounter(document.querySelector('#counter'), document.querySelector('#gable'))
