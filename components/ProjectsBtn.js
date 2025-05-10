// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
	return (
		<div className="mx-auto xl:mx-0 z-10">
			<Link
				href={"/Resume.pdf"}
				className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
				<Image
					src={"/rounded-text.png"}
					width={500}
					height={500}
					alt=""
					className="animate-spin-slow w-full h-full max-w-[300px] max-h-[300px]"
				/>
				<HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
			</Link>
		</div>
	);
};

export default ProjectsBtn;
