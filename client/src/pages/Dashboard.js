import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Bar, Pie, Line } from "react-chartjs-2";


const Dashboard = ({ consumers, stores, products, orders }) => {
    const [chartData, setChartData] = useState({});
    const [itemsSold, setItemsSold] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    let avgSalerPerStore = 0;
    let salesPerStore = [];
    let leaderProducts = [{}];
    let ordersThisWeek = [{}]

    useEffect(() => {

        if (consumers && stores && products && orders) {
            consumers.length > 0 ? console.log('consumers: ', consumers) : console.log('');
            stores.length > 0 ? console.log('stores: ', stores) : console.log('');
            products.length > 0 ? console.log('products: ', products) : console.log('');
            orders.length > 0 ? (console.log('orders: ', orders)) : console.log('');
            if (orders.length > 0) {
                let itemsCount = 0;
                let salesSum = 0;
                orders.forEach(order => {
                    itemsCount += order.products.length;
                    salesSum += order.totalAmount;
                    // console.log('itemsCount: ', itemsCount);
                });
                setItemsSold(itemsCount);
                setTotalSales(salesSum);
            }
        }

        chart();
    }, [consumers, stores, products, orders]);

    const chart = () => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        });
    };



    return (
        <div>
            <h4>
                <strong>Marketplace Dashboard</strong>
            </h4>

            <Row>
                <Col>
                    <Card>
                        <Card.Header className="py-1">Total Registered</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Users: {consumers.length || '0'}</p>
                                <p>Stores: {stores.length || '0'}</p>
                                <p>Products: {products.length || '0'}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Items Sold</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">{itemsSold}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Total Sales</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">{totalSales}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Average Sales Per Store</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">100</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Sales Per Store</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%" }}>
                                <Bar
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Leader Products</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%" }}>
                                <Pie
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Orders This Week</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%", height: '50%' }}>
                                <Line
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
