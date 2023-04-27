import React, { useCallback } from 'react'
import {
	FluentProvider,
	webLightTheme,
	webDarkTheme,
	makeStyles
} from '@fluentui/react-components'

export const themeContext = React.createContext({
	theme: webLightTheme,
	switchTheme: () => {}
})

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%'
	}
})

//
// Theme Provider
//
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = React.useState(webLightTheme)
	const styles = useStyles()

	//
	const switchTheme = useCallback(() => {
		setTheme((prevTheme) => {
			if (prevTheme === webLightTheme) {
				return webDarkTheme
			} else {
				return webLightTheme
			}
		})
	}, [])

	//
	return (
		<themeContext.Provider value={{ theme, switchTheme }}>
			<FluentProvider className={styles.root} theme={theme}>
				{children}
			</FluentProvider>
		</themeContext.Provider>
	)
}

export default ThemeProvider
