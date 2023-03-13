import Image from "next/image";
import styles from "@/src/styles/components/InfoBlurb.module.css";

const InfoBlurb = ({ icon, iconAlt, title, text }) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					src={`${strapiUrl}${icon}`}
					alt={iconAlt}
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.heading}>{title}</h2>
				<p className={styles.content}>{text}</p>
			</div>
		</div>
	);
};

export default InfoBlurb;
