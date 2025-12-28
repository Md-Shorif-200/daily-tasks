import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvier } from './Context/TodosProvier.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvier>
          <App />
    </TodosProvier>
  </StrictMode>,
)
