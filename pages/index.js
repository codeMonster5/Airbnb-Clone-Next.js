import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData,cardData }) {
	return (
		<div>
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />

			{/* Banner */}
			<Banner />

			{/* main content  */}
			<main className=" max-w-7xl mx-auto px-8 sm:px-16">
				<section className=" pt-6">
					<h2 className="font-bold text-black text-4xl pb-5">Explore Nearby</h2>

					{/* pulling data from the server api endPoints */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
						{exploreData?.map(({ img, location, distance }) => (
							<SmallCard key={img} img={img} location={location} distance={distance} />
						))}
					</div>
				</section>
				{/* card data */}
				<section>
				
						<h1 className="font-bold  text-4xl py-8" >Live AnyWhere</h1>
					  <div className=" space-x-2 p-3 ml-2 flex overflow-scroll scrollbar-hide " >
                {cardData?.map(({img,title})=>(
                    <MediumCard img={img} title={title} />
                ))}
            </div>
				</section>
				<LargeCard 
				img="http://links.papareact.com/4cj"
				title="The Greatest Outdoors"
				descriptions="Wishlists curated by AirBnB"
				buttonText ="Get Inspired"
				/>
				
			</main>
			<div className="">
				  <Footer/>
				</div>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json(),
	);
	const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
		res.json(),
	);
  console.log(cardData);
	return {
		props: {
			exploreData,
			cardData,
		},
	};
}
