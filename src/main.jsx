import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ClickEvent from './ClickEvent'
import Jsx from './Jsx'
import UseStateExample from './UseStateExample'
import UseStateWithClassComponent from './UseStateWithClassComponent'
import MainComponent from './Props example/MainComponent'
import GetInputValue from './GetInputValue'
import Validation from './Validation'
import MainComponentMovie from './movie website/MainComponent'
import FetchData from './fetch data/FetchData'
import ParentComponent from './Context/ParentComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
)
