import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImgMediaCard from "./ImgMediaCard.tsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Masonry from "@mui/lab/Masonry";

const fetchProducts = async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    const products = res.data;
    console.log(products.map((i) => i.title));
    return res.data;
};

const Product = () => {
    const {
        data: data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["data"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>Loading</p>;
    if (error) return <p>error: {error.message}</p>;

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    padding: "20px",
                }}
            >
                {data.map((product) => (
                    <Card key={product.id} sx={{ maxWidth: "100%" }}>
                        <CardMedia
                            component="img"
                            alt={product.title}
                            height="140"
                            image={product.images[0]}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${product.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Buy</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </Container>
        </>
    );
};

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Product />
        </React.Fragment>
    );
}