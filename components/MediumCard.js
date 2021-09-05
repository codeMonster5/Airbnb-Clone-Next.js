import Image from "next/image";

function MediumCard({ img, title }) {
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-200  ease-out" >
			<div className="relative w-80 h-80  ">
				<Image src={img} layout="fill" className="rounded-xl" />
			</div>
            <h3 className=" mt-3 text-2xl" >{title}</h3>
		</div>
	);
}

export default MediumCard;
