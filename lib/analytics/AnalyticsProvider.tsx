import { createContext } from 'react'
import { Analytics } from './Analytics'

export const AnalyticsContext = createContext<Analytics | null>(null)

export const AnalyticsProvider: React.FC = ({ children }) => (
  <AnalyticsContext.Provider value={new Analytics()}>
    {children}
  </AnalyticsContext.Provider>
)
