// Required imports
// import { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// Required objects
// Icons imports

export default function MainLayout ({  }) {
	
	return (
		<div className='w-[100vw] min-h-[100vh] flex flex-col bg-[#3c97dd] transition-colors duration-300 ease-in-out'>
			<div className='w-[calc(100% - 4.3rem)] max-w-[1400px] mx-auto px-[2.16rem] flex flex-col flex-1'>
				<div className="flex-1">
					<Outlet />
				</div>
			</div>
		</div>
	)
}