import React from "react";
import Link from "next/link";
import {
    Container,
    Typography,
    Box,
    Button,
    Stack,
    Card,
	CardContent,
	CardMedia,
    Grid,
    CardActions,
} from "@mui/material";
import axios from "axios";

// export async function getServerSideProps() {
// 	const [ blogPostsRes ] = await Promise.all([
// 		axios.get("/api/blog-posts/"),
// 	]);
// 	const [ blogPosts ] = await Promise.all([
// 		blogPostsRes.data,
// 	]);
// 	return {
// 		props: {
// 			blogPosts,
// 		},
// 	};
// }


export default function Blog({  }) {
    // React.useEffect(() => {
    //     console.log('TATA', blogPosts);
    //   }, []);
    return (
       <>
      
        <Box style={{ textAlign: 'center', padding: '2rem' }}>
            <Typography className="blog-main-title" variant="h3" component="h1">
                Blog and News
            </Typography>
            <Typography className="blog-category-title" variant="h4" component="h4">
                Catch up with our latest news and articles !
            </Typography>
        </Box>
        <Container className="blog-main-container">
            
            <Grid container spacing={2}>
            {/* {blogPosts.map((item) => (
                <>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardMedia component="img" height="240" image={item.cover_image} alt={item.title} />
                            <CardContent>
                                <Typography style={{ color: 'rgb(16, 51, 113)' }} gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" style={{ color: '#ed2024' }}>
                                    {item.subtitle} | {item.category.name}
                                </Typography>
                                
                            </CardContent>
                            <CardActions>
                                <Link href={`/blog/${item.slug}`}>
                                    <Button size="small">Read More</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            ))} */}
            </Grid>
        </Container>
       </>
    );
}