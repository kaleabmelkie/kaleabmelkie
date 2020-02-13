import React from 'react'

import './styles/index.scss'

type AppProps = React.PropsWithChildren<{}>

const App: React.FC<AppProps> = ({ children }) => {
  return <>{children}</>
}

export default App
