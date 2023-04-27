import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './ThemeProvider.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
)
