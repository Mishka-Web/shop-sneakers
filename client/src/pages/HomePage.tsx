import Search from "../components/Search";
import Products from "../components/Products";
import IntroSlider from "../components/IntroSlider";

export default function HomePage() {
	return (
		<main className="flex flex-col pt-[4.5rem] pb-[7.2rem]">
			<div className="container">
				<IntroSlider />
				<div>
					<section className="flex items-start justify-between flex-wrap gap-4">
						<h2 className="text-[3.2rem] font-bold">
							Все кроссовки
						</h2>
						<Search />
					</section>
					<Products />
				</div>
			</div>
		</main>
	);
}
