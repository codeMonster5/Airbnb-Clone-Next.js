import Image from "next/image";
import { GlobeAltIcon,
	MenuIcon, UserCircleIcon, SearchIcon , UsersIcon
	} from '@heroicons/react/solid'
function Header() {
	return (
		<header className="sticky top-0 z-50 grid  grid-cols-3 bg-white shadow-md p-5 md:px-10 " >
			{/* Left Section */}
			<div  className=" relative flex items-center h-10 cursor-pointer my-auto  ">
				<Image
				 src="https://links.papareact.com/qd3"
				 layout="fill"
				 objectFit="contain"
				 objectPosition="left"
				/>
			</div>
			{/* Middle --> representing Search Sections */}
			<div className=" pr-1 flex items-center border-2 rounded-full py-2 md:shadow-sm " >

			<input className=" text-gray-600 placeholder-gray-400 pr-1 flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Search"  />
			<SearchIcon  className=" hidden md:inline-flex bg-red-400 h-8 text-white p-1 rounded-full cursor-pointer  "/>
			</div>

			{/* Right */}
			<div className="flex items-center space-x-4 justify-end" >
				<p className="hidden md:inline-flex"  >Become a host</p>
				<GlobeAltIcon className="h-5" />
				<div className="rounded-full border-2 p-2 flex items-center  space-x-2 ">
					<MenuIcon className="h-6" />
					<UsersIcon className="h-6" />
				</div>
			</div>
		</header>
	);
}

export default Header;
