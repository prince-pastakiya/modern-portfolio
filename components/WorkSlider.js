// work slider data
export const workSlider = {
	slides: [
		{
			images: [
				{
					title: "Uber Data Analysis",
					path: "/Uber-Analytics-Project.png",
					alt: "Uber Data Analysis Project",
					link: "https://github.com/prince-pastakiya/Uber-Data-Analytics-Project",
				},
				{
					title: "Roomify - Hotel Booking",
					path: "/Roomify-Hotel-Website.png",
					alt: "Roomify Hotel Booking",
					link: "https://roomify-by-prince-pastakiya.vercel.app/",
				},
				{
					title: "Portfolio Website",
					path: "/Portfolio-Website.png",
					alt: "Portfolio Website",
					link: "https://prince-pastakiya-github-io.vercel.app/",
				},
				{
					title: "Finance Dashboard - Machine Learning",
					path: "/Finance-Dashboard.png",
					alt: "Finance Dashboard Project",
					link: "https://github.com/prince-pastakiya/Finance-Dashboard",
				},
			],
		},
		{
			images: [
				{
					title: "Sample Project 1",
					path: "/thumb4.jpg",
					alt: "Sample Project 1",
					link: "",
				},
				{
					title: "Sample Project 2",
					path: "/thumb1.jpg",
					alt: "Sample Project 2",
					link: "",
				},
				{
					title: "Sample Project 3",
					path: "/thumb2.jpg",
					alt: "Sample Project 3",
					link: "",
				},
				{
					title: "Sample Project 4",
					path: "/thumb3.jpg",
					alt: "Sample Project 4",
					link: "",
				},
			],
		},
	],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			className="h-[280px] sm:h-[480px]">
			{workSlider.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
							{slide.images.map((image, index) => {
								return (
									<a
										href={image.link}
										target="_blank"
										rel="noopener noreferrer"
										key={index}>
										<div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
											<div className="flex items-center justify-center relative overflow-hidden group">
												<Image
													src={image.path}
													width={500}
													height={300}
													alt={image.alt}
												/>
												<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
												<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
													<div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
														<div className="delay-100">LIVE</div>
														<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
															PROJECT
														</div>
														<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
															<BsArrowRight />
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								);
							})}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
