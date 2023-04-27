import { makeStyles, shorthands } from '@fluentui/react-components'
import { Stack } from '@fluentui/react'
import LayoutHeader from './LayoutHeader'
import LayoutTabs from './LayoutTabs'
import LayoutDevButtons from './LayoutDevButtons'

const useStyles = makeStyles({
	app: {
		...shorthands.padding('1rem')
	}
})

const App = () => {
	const styles = useStyles()

	return (
		<Stack verticalFill className={styles.app}>
			<LayoutHeader />
			<LayoutDevButtons />
			<LayoutTabs></LayoutTabs>
		</Stack>
	)
}

export default App
