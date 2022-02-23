import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'
import Home from './Home'

const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)

export default Router
