import React, { Component } from "react"
import { Button, Container, CardDeck, Card } from "react-bootstrap"
import CarouselBox from "../Components/CarouselBox"

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <h2 className="text-center m-4">Our Work</h2>
                    <CardDeck className="m-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src="http://restoranoff.ru/upload/iblock/54b/osnova-effektivnoy-komandy_main.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Founders</Card.Title>
                                <Card.Text>
                                    We a the bes of CoffeMakers at this wold motherfuker babyes.
                                </Card.Text>
                                <Button variant="primary"> CoffeMakers </Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_04/3444881/210124-bestcoffee-bd-2x1still.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Founders</Card.Title>
                                <Card.Text>
                                    We a the bes of CoffeMakers at this wold motherfuker babyes.
                                </Card.Text>
                                <Button variant="primary"> CoffeMakers </Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://www.techadvisor.com/cmsdata/slideshow/3691237/best_coffee_maker_2021_thumb800.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Founders</Card.Title>
                                <Card.Text>
                                    We a the bes of CoffeMakers at this wold motherfuker babyes.
                                </Card.Text>
                                <Button variant="primary"> CoffeMakers </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}