import React, { Component } from "react"
import { Container, Nav, Tab, Row, Col } from "react-bootstrap"

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Catalog</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Costs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" >Vacansy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Team</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col cm={9}>
                            <Tab.Content className="flex-row mt-3 ml=4">
                                <Tab.Pane eventKey="first">
                                    <img src="https://zabava.by/piximage/resize/1000x700/storage/images/catalog/gallery/vd/7x/cd534ec7e3d0e99782fe3e2866ffc09e.jpg"/>
                                    <p>Lorem dmasbfjkbwkjdjalksjdoiwhdnskalfkwjdklsabgfjwoaijgsklghjaskljghaksfj ja;skgfjsalkghjj dad</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://b.zmtcdn.com/data/menus/960/18872960/372df5543dfbb335c0a6c8675c54e35f.jpg"/>
                                    <p>Lorem dmasbfjkbwkjdjalksjdoiwhdnskalfkwjdklsabgfjwoaijgsklghjaskljghaksfj ja;skgfjsalkghjj dad</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://imagemanstudio.com/wp-content/uploads/2020/09/coffee-point-yerevan-by-alan-grigorian.jpg"/>
                                    <p>Lorem dmasbfjkbwkjdjalksjdoiwhdnskalfkwjdklsabgfjwoaijgsklghjaskljghaksfj ja;skgfjsalkghjj dad</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUaOvtL-A_vQ5pwyp4ZC7JIpdY6Lc4eopAw&usqp=CAU"/>
                                    <p>Lorem dmasbfjkbwkjdjalksjdoiwhdnskalfkwjdklsabgfjwoaijgsklghjaskljghaksfj ja;skgfjsalkghjj dad</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://img.freepik.com/free-photo/young-barista-girl-makes-coffee-and-smiles_1157-36654.jpg?size=626&ext=jpg"/>
                                    <p>Lorem dmasbfjkbwkjdjalksjdoiwhdnskalfkwjdklsabgfjwoaijgsklghjaskljghaksfj ja;skgfjsalkghjj dad</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}