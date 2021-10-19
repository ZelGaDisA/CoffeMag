import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import coffeImg from "../assets/coffe1.jpg"
import dcoffeImg from "../assets/coffe2.jpg"
import ccoffeImg from "../assets/coffe3.jpg"
import ecoffeImg from "../assets/coffe4.jpg"
import fcoffeImg from "../assets/coffe5.jpg"

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ coffeImg } 
                        alt="Coffe"
                    />
                    <Carousel.Caption>
                        <h3>Coffe Image 1</h3>
                        <p>Lorem idsf asd gqwrwqr qwrqwrfas fasfsa fwqttgasd</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ dcoffeImg } 
                        alt="Coffe1"
                    />
                    <Carousel.Caption>
                        <h3>Coffe Image 2</h3>
                        <p>Lorem idsf asd gqwrwqr qwrqwrfas fasfsa fwqttgasd</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ecoffeImg } 
                        alt="Coffe2"
                    />
                    <Carousel.Caption>
                        <h3>Coffe Image 3</h3>
                        <p>Lorem idsf asd gqwrwqr qwrqwrfas fasfsa fwqttgasd</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ccoffeImg } 
                        alt="Coffe3"
                    />
                    <Carousel.Caption>
                        <h3>Coffe Image 4</h3>
                        <p>Lorem idsf asd gqwrwqr qwrqwrfas fasfsa fwqttgasd</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ fcoffeImg } 
                        alt="Coffe4"
                    />
                    <Carousel.Caption>
                        <h3>Coffe Image 5</h3>
                        <p>Lorem idsf asd gqwrwqr qwrqwrfas fasfsa fwqttgasd</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}