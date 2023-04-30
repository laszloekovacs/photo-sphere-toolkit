import React from 'react'
import { Stack } from '@fluentui/react'
import { Button, Toolbar } from '@fluentui/react-components'
import PanoramasList from './PanoramasList'

const PanoramasContainer = () => {
	return (
		<Stack id='panoramasContainer' verticalFill>
			<Toolbar>
				<input type='file' name='file' id='fileinput' multiple />
				<Button size='small'>Upload</Button>
			</Toolbar>
			<PanoramasList />
		</Stack>
	)
}

export default PanoramasContainer
