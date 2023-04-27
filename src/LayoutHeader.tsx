import { Stack } from '@fluentui/react'
import { Subtitle1 } from '@fluentui/react-components'
import ThemeSwitch from './ThemeSwitch'
import React from 'react'

const LayoutHeader = React.memo(() => {
	return (
		<Stack horizontal horizontalAlign='space-between'>
			<Subtitle1>Photo Sphere Toolkit</Subtitle1>
			<ThemeSwitch />
		</Stack>
	)
})

export default LayoutHeader
