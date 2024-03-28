import React from "react";

import {
    Container,
    Typography,
    Box,
    Button,
    Stack,
} from "@mui/material";
import axios from "axios";

// export const getServerSideProps = async ({ params }) => {
// 	const res = await fetch(
// 		`/api/blog-posts/${params.slug}`
// 	);
// 	const data = await res.json();
// 	return {
// 		props: { data },
// 	};
// };


export default function Blog({  }) {
    // React.useEffect(() => {
    //     console.log('SLO', data);
    //   }, []);
    return (
        <Container className="blog-main-container">
            {/* <Typography className="blog-main-title" variant="h3" component="h1">
                {data.title}
            </Typography>
            <Typography className="blog-category-title" variant="h4" component="h4">
            {data.subtitle} | {data.category.name}
            </Typography>
                <div style={{ color: 'rgb(16, 51, 113)' }} dangerouslySetInnerHTML={{ __html: data.description }} />
                <div style={{ color: 'rgb(16, 51, 113)' }} dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </Container>
    );
}