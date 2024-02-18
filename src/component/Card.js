import React from "react";
import { Card } from "antd";
import { useNavigate  } from "react-router-dom";
const { Meta } = Card;

const CardComponent = ({ product }) => {
	const navigate = useNavigate();
	function handleNavigate(title) {
		navigate(`/product/${title}`);
	}
	return (
		<Card
			hoverable
			onClick={() => handleNavigate(product.title)}
			style={{
				width: 240,
			}}
			cover={<img alt='example' src={product.thumbnail} />}
		>
			<Meta title={product.title} description={product.description} />
		</Card>
	);
};
export default CardComponent;
