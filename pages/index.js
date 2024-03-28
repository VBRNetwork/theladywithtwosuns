import Head from "next/head";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-query";
import { isMobile } from "react-device-detect";
import {
	Container,
	Backdrop,
	CircularProgress,
	Box,
	Typography,
	Stack,
	Button,
} from "@mui/material";
import TextTransition, { presets } from 'react-text-transition';
import { Partners } from "../components/Partners";
import { ProjectsNumber } from "../components/ProjectsNumber";
import { AboutUs } from "../components/AboutUs";
import { NewHeader } from "../components/NewHeader";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import axios from "axios";
import { ContactForm } from "../components/ContactForm";
import { toast } from "react-toastify";

const addContactMessage = async (data) => {
	const res = await fetch("http://localhost:8080/api/contact/contact-form/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		if (res.status === 429) {
			toast.error("Rate limit exceeded", {
				icon: "⏃",
			});
			throw new Error("Rate limit exceeded");
		}

		const error = await res.json();
		if (error.details) {
			toast.error(error.details, {
				icon: "⏃",
			});
			throw new Error(error.details);
		}

		if (error.non_field_errors) {
			toast.error(error.non_field_errors[0], {
				icon: "⏃",
			});
			throw new Error(error.non_field_errors[0]);
		}
		toast.error("Something went wrong", {
			icon: "⏃",
		});
		throw new Error("Something went wrong");
	}

	toast.done("Message Sent")
	return await res.json();
};

// export async function getServerSideProps() {
// 	const [ priorityJobsRes, pricingPacksRes ] = await Promise.all([
// 		axios.get("http://localhost/api/priority-jobs"),
// 		axios.get("http://localhost/api/pricing-packs"),
// 	]);
// 	const [ priorityJobs, pricingPacks ] = await Promise.all([
// 		priorityJobsRes.data,
// 		pricingPacksRes.data,
// 	]);
// 	return {
// 		props: {
// 			priorityJobs,
// 			pricingPacks,
// 		},
// 	};
// }

export default function Home({  }) {

	const contactMessageRef = React.useRef(null);
	const { isSuccess, isLoading, mutate } = useMutation(addContactMessage, {
		onSuccess: () => {
			toast.success("Message Sent Successfully !", {
				icon: "⏃",
			});
			console.log("success");
		},
		onError: () => {
			console.log("error");
		},
		onSettled: () => {
			console.log("settled");
		},
	});

	const [supportMessage, setSupportMessage] = React.useState({
		name: "",
		email: "",
		company: "",
		support_message: "",
	});

	const handleSupportMessageChange = (e) => {
		setSupportMessage({ ...supportMessage, [e.target.name]: e.target.value });
	};

	const submitMessage = async () => {
		mutate(supportMessage);
		setSupportMessage({
			name: "",
			email: "",
			company: "",
			support_message: "",
		});
	};

	if (isLoading) {
		return (
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={true}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		);
	}

	return (
		<>
			<Head>
				<title>VBR Labs</title>
				<meta name="description" content={"VBR Labs"} />
				{/* <meta
					name="keywords"
					content={""}
				/> */}
				{/* <meta property="og:image" content="https://i.imgur.com/Gi6hQFM.png" /> */}
				{/* <meta property="og:image" content={data.seo.image} /> */}
				{/* <meta property="og:title" content={data.seo.title} /> */}
				<meta property="og:description" content={"VBR Labs"} />
				{/* <meta property="og:url" content={data.seo.url} /> */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={"VBR Labs"} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className="home-main-container">
				<img
					src="images/frame.png"
					className="landing-frame"
				/>
				<img
					src="images/landing.jpg"
					className="landing-img"
				/>
				<Box className="landing-box">
					<TextTransition className="landing-text" springConfig={presets.wobbly}>
						Welcome to the second phase
						of our game, <br />
						<Box style={{ textAlign: 'center' }}>
							<span style={{ textAlign: "center" }}>
								My Love !
							</span>
						</Box>
					</TextTransition>
				</Box>
				<Button
					className="landing-btn"
					variant="contained"
					component="a"
					href="/map-of-the-game"
				>
					Begin Your Journey
				</Button>
			</Container>
		</>
	);
}
