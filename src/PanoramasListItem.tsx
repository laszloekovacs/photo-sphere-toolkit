import {
	Body1,
	Button,
	Card,
	CardFooter,
	CardHeader,
	CardPreview,
	makeStyles
} from '@fluentui/react-components'
import React, { useEffect } from 'react'
import { Add16Filled } from '@fluentui/react-icons'

const useStyles = makeStyles({
	card: {
		width: '400px',
		maxWidth: '100%',
		height: 'fit-content'
	}
})

const PanoramasListItem = ({ url }) => {
	const styles = useStyles()

	return (
		<Card className={styles.card}>
			<CardHeader header={<Body1>file/name.jpg</Body1>} />
			<CardPreview>
				<img src={url} />
			</CardPreview>
			<CardFooter>
				<Button icon={<Add16Filled />} size='small'>
					Add to project
				</Button>
			</CardFooter>
		</Card>
	)
}

export default PanoramasListItem
