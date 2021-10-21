import React, { Component } from "react"
import {
    Media,
    Container,
    Row,
    Col,
    Card,
    ListGroup
} from "react-bootstrap"


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.wired.com/photos/5f4fff2f846cd1b8a71081e9/1:1/w_1800,h_1800,c_limit/Gear-8718800_OXO-Brew-8-Cup-Coffee-Maker_Profile_Bubbling.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem pidori blyat text eby4ii kak on menia zaebal no 4to podelat esli
                                    y4ast takaia kak ia sebe i predtavlial, takie sydbi y programmistow
                                    ia nadeys vi menya ponimaete i ne bydete 4itat etot text.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.wired.com/photos/5f4fff2f846cd1b8a71081e9/1:1/w_1800,h_1800,c_limit/Gear-8718800_OXO-Brew-8-Cup-Coffee-Maker_Profile_Bubbling.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem pidori blyat text eby4ii kak on menia zaebal no 4to podelat esli
                                    y4ast takaia kak ia sebe i predtavlial, takie sydbi y programmistow
                                    ia nadeys vi menya ponimaete i ne bydete 4itat etot text.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.wired.com/photos/5f4fff2f846cd1b8a71081e9/1:1/w_1800,h_1800,c_limit/Gear-8718800_OXO-Brew-8-Cup-Coffee-Maker_Profile_Bubbling.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem pidori blyat text eby4ii kak on menia zaebal no 4to podelat esli
                                    y4ast takaia kak ia sebe i predtavlial, takie sydbi y programmistow
                                    ia nadeys vi menya ponimaete i ne bydete 4itat etot text.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center">Categiries</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Зерна</ListGroup.Item>
                                <ListGroup.Item>Помолка</ListGroup.Item>
                                <ListGroup.Item>Варка</ListGroup.Item>
                                <ListGroup.Item>Оформление</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side vision</Card.Title>
                                <Card.Text>
                                    Lorem pidori blyat text eby4ii kak on menia zaebal no 4to podelat esli
                                    y4ast takaia kak ia sebe i predtavlial, takie sydbi y programmistow
                                    ia nadeys vi menya ponimaete i ne bydete 4itat etot text.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}