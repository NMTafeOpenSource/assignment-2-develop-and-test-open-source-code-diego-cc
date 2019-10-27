import React from 'react';
import {Container, Row, Col, Accordion, Card, Button, ListGroup} from 'react-bootstrap'
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";

export const BrowseVehicles = props => (
    <Container>
        <Row>
            <Col>
                <h2 className="text-center my-5">Browse vehicles</h2>
            </Col>
        </Row>
        {
            props.loading ?
                (
                    <Row className="justify-content-center mt-5">
                        <LoadingSpinner/>
                    </Row>
                ) :
                (
                    <Accordion>
                        {
                            props.vehicles.map((vehicle, index) => (
                                <Card key={vehicle.id}>
                                    <Accordion.Toggle as={Card.Header} eventKey={index}>
                                        <Button variant="link">
                                            {`${vehicle.data.manufacturer} ${vehicle.data.model} (${vehicle.data.year})`}
                                        </Button>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={index}>
                                        <Card.Body>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    Manufacturer: {vehicle.data.manufacturer}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Model: {vehicle.data.model}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Year: {vehicle.data.year}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Registration Number: {vehicle.data.registrationNumber}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Odometer Reading: {vehicle.data.odometerReading} km
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Tank Capacity: {vehicle.data.tankCapacity} L
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Fuel Economy: {vehicle.data.fuelEconomy}
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            ))
                        }
                    </Accordion>
                )
        }
    </Container>
);
