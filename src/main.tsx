import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from '@/App'
import './index.css'
import './App.css'
import "@/assets/iconfont/iconfont.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
