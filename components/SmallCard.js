import Image from 'next/image';

function SmallCard({img , location, distance}) {
    return (
        <div className="flex items-center m-2 space-x-4 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
           {/* left*/}
            <div className="relative h-16 w-16" >
                <Image src ={img} layout="fill" objectFit="contain"  className="rounded-lg"/>
            </div>
           {/* right */}
           <div className="" >
               <h1>
                   {location}
               </h1>
               <h2 className="text-gray-500" >
                   {distance}
               </h2>
           </div>
        </div>
    )
}

export default SmallCard
