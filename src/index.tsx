import ReactDOM from 'react-dom/client'
import 'react-app-polyfill/ie11'
import 'core-js/actual'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
