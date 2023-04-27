import React from 'react'
import { Stack } from '@fluentui/react'
import { Button, Input, Toolbar } from '@fluentui/react-components'

const PanoramasContainer = () => {
	return (
		<Stack id='panoramasContainer' verticalFill>
			<Toolbar>
				<input type='file' name='file' id='fileinput' multiple />
				<Button size='small'>Upload</Button>
			</Toolbar>
		</Stack>
	)
}

export default PanoramasContainer
