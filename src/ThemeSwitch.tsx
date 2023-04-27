import React from 'react'
import { Stack } from '@fluentui/react'
import { Switch, webLightTheme } from '@fluentui/react-components'
import { themeContext } from './ThemeProvider'

const ThemeSwitch = () => {
	const { theme, switchTheme } = React.useContext(themeContext)

	return (
		<Stack horizontal>
			<Switch
				onChange={switchTheme}
				label={theme == webLightTheme ? 'light' : 'dark'}
			/>
		</Stack>
	)
}

export default ThemeSwitch
