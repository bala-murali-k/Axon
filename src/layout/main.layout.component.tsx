// Required imports
// import { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// Component imports
import { CoreHeaderToolsLayout } from '../components/headertools/core.headertools.component'
import { CoreSidebarToolsLayout } from '../components/sidebartools/core.sidebartools.component'
// Required objects
// Icons imports

export default function MainLayout ({  }) {
	
	return (
		<div className='w-[100vw] min-h-[100vh] flex flex-col transition-colors duration-300 ease-in-out'>
			<div className='w-[100vw] min-h-[5px] max-h-[35px]'>
				<CoreHeaderToolsLayout />
			</div>
			<div className='max-h-[calc(100vh - 35px)] flex'>
				<CoreSidebarToolsLayout />
				<Outlet />
			</div>
		</div>
	)
}