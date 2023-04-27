import React from 'react'
import { Stack } from '@fluentui/react'
import {
	Caption1,
	Divider,
	SelectTabData,
	SelectTabEvent,
	Tab,
	TabList,
	TabValue
} from '@fluentui/react-components'
import PanoramasContainer from './PanoramasContainer'

const tabs = ['Editor', 'Panoramas', 'Images', 'Articles'] as const
const first = 1

const LayoutTabs = () => {
	const [selected, setSelected] = React.useState<TabValue>(tabs[first])

	const onTabsSelect = (event: SelectTabEvent, data: SelectTabData) => {
		setSelected(data.value)
	}

	return (
		<>
			<Stack id='tablayout' verticalFill>
				<Stack id='tabselector' horizontal horizontalAlign='center'>
					<TabList selectedValue={selected} onTabSelect={onTabsSelect}>
						{tabs.map((tab) => (
							<Tab key={tab} id={tab} value={tab}>
								{tab}
							</Tab>
						))}
					</TabList>
				</Stack>
				<Divider />
				<Stack id='tabcontent' verticalFill>
					{selected == 'Panoramas' && <PanoramasContainer />}
				</Stack>
			</Stack>
		</>
	)
}

export default LayoutTabs
