import ReactGA from 'react-ga'

export function initGA(): void {
  ReactGA.initialize('UA-154981201-1')
}

export function logPageView(): void {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
