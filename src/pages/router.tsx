import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'
import Home from './Home'
import Error404 from './Error404'

const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)

export default Router
