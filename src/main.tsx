import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvier } from './Context/TodosProvier.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
         <TodosProvier>
          <App />
    </TodosProvier>
     </BrowserRouter>

  </StrictMode>,
)
