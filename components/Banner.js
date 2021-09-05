import Image from "next/image";

function Banner() {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="https://links.papareact.com/0fm"
				layout="fill"
				objectFit="cover"
			/>
            <div className="absolute top-1/2 w-full text-center " >
                <p className="text-black text-sm sm:text-lg md:text-md lg:text-sm font-bold " >Not sure Where to go?Perfect</p>

                <button className="text-purple-500 font-bold bg-white px-10 py-4 rounded-full shadow-md my-3 hover:shadow-lg
                 active:scale-90 transition duration-150"  >I'm Flexible</button>
            </div>
		</div>
	);
}

export default Banner;
