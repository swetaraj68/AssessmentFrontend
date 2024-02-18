import React from "react";
import products from "./assets/product";
import CardComponent from "./component/Card";
import { Row, Col } from "antd";

export default function HomePage() {
	return (
		<div style={{ padding: "5rem" }}>
			<Row gutter={[10, 10]}>
				{products.map((product) => {
					return (
						<Col key={product.id} xl={6}>
							<CardComponent product={product} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
}
