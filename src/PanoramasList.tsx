import React from 'react'
import { Stack } from '@fluentui/react'
import PanoramasListItem from './PanoramasListItem'

const PanoramasList = () => {
	const imgs = new Array(24).fill(`https://picsum.photos/400/200`)

	return (
		<Stack horizontal wrap>
			{imgs && imgs.map((img) => <PanoramasListItem key={img} url={img} />)}
		</Stack>
	)
}

export default PanoramasList
