import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import styles from "@/src/styles/pages/Contact.module.css";
import {
	BsFillChatLeftFill,
	BsFillTelephoneOutboundFill,
	BsClock,
} from "react-icons/bs";

export default async function Contact() {
	const [mapUrl] = await getMediaData([15]);
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `linear-gradient(var(--color-blue-overlay), var(--color-blue-overlay)), url(${mapUrl.fullUrl})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.row}>
					<h1>
						Contact Us
						<br />
						Now
					</h1>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.row}>
					<span>Consultations</span>
					<h4>Set Up a Consultation Today!</h4>
					<p>
						We are here to assist you in your legal matters, reach out below to
						set up a convenient time to see how we can help.
					</p>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={styles.row}>
						<BsFillChatLeftFill />
						<div className={`${styles.textContainer}`}>
							<span>Email</span>
							<p>Brandon@orrlawok.com</p>
						</div>
					</div>
					<div className={styles.row}>
						<BsFillTelephoneOutboundFill />
						<div className={`${styles.textContainer}`}>
							<span>Phone</span>
							<p>972-561-7833</p>
						</div>
					</div>
					<div className={styles.row}>
						<BsClock />
						<div className={`${styles.textContainer}`}>
							<span>Hours</span>
							<p>By Appointment</p>
						</div>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<h2>Contact Us</h2>
					<form>
						<input type="text" placeholder="Name" />
						<div>
							<input type="email" placeholder="Email" />
							<input type="text" placeholder="Phone" />
						</div>
						<textarea placeholder="Message" />
						<button type="submit">Submit</button>
					</form>
				</div>
			</section>
		</>
	);
}
