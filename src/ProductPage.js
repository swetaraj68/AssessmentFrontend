import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "./assets/product";
import { Rate, Tag, Carousel, Row, Col, Typography } from "antd";
import "./App.css";

const { Title, Paragraph } = Typography;

export const ProductPage = () => {
	const {title } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		const productData = products.find((product) => product.title === (title));
		setProduct(productData);
	}, [title]);

	

	if (Object.keys(product).length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Row justify='center' align='middle' style={{ padding: "2rem" }}>
				<Col xs={24} sm={24} md={12} lg={8}>
					<img
						alt={product.title}
						src={product.thumbnail}
						style={{ width: "100%" }}
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<Title>{product.title}</Title>
					<Paragraph>{product.description}</Paragraph>
					<Paragraph>Price: {product.price}</Paragraph>
					<Paragraph>Discount: {product.discountPercentage}%</Paragraph>
					<Rate disabled defaultValue={product.rating} />
					<Paragraph>Stock: {product.stock}</Paragraph>
					<Tag color='blue'>{product.brand}</Tag>
					<Tag color='green'>{product.category}</Tag>
				</Col>
			</Row>
			<hr />
			<Row
				justify='center'
				align='middle'
				style={{ padding: "2rem", backgroundColor: "black" }}
			>
				<Col xs={24} sm={24} md={12} lg={8}>
					<Carousel autoplay dots>
						{product?.images.length > 0 &&
							product?.images?.map((image, index) => (
								<div
									style={{ backgroundColor: "black", border: "1px solid red" }}
									key={index}
								>
									<img
										src={image}
										alt={`${product.title} ${index}`}
										// height='50rem'
										style={{ width: "100%" }}
									/>
								</div>
							))}
					</Carousel>
				</Col>
			</Row>
		</>
	);
};
