import { DashboardPage } from './pages/dashboard'
import { PublicationDetail } from './components/publications/PublicationDetail'

export const routes = [
  { path: '/', element: <DashboardPage /> },
  { path: '/publications/:id', element: <PublicationDetail /> }
]
