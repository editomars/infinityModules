import React, { Component } from 'react';
import styles from './App.css';
import { Carousel, Col, Modal, NameCard, ProgressBar, Row } from './Component';

console.log(styles);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
    }

    render() {
        const { isModalOpen } = this.state;
        return (
            <div className="container">

            <h2> Modal </h2>
            <button onClick={() => this.setState({ isModalOpen: true})}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => this.setState({ isModalOpen: false })}>
                <Modal.Title>MY MODAL TITLE</Modal.Title>
                <Modal.Body>MY MODAL BODY</Modal.Body>
                <Modal.Footer>MY MODAL FOOTER</Modal.Footer>
            </Modal>

                <h2> Progress Bar </h2>
                <ProgressBar
                    progress={25}
                    striped={true}
                    animated={true}
                    state="info" />
                <ProgressBar
                    progress={50}
                    striped={true}
                    animated={true}
                    state="success" />
                <ProgressBar
                    progress={75}
                    striped={true}
                    animated={true}
                    state="warning" />
                <ProgressBar
                    progress={100}
                    striped={true}
                    animated={true}
                    state="danger" />

                <h2> NameCard </h2>
                <NameCard
                  name="Wonder Woman"
                  email="iwonder@woman.com"
                  telephone="1800-940-8702"
                  imageUrl="https://i.pinimg.com/564x/a3/f3/b1/a3f3b1dd29a22965e3715dd95aadf985.jpg"/>

                <h2> Carousel </h2>
                <Carousel
                  images={[
                      'http://www.plus961.com/wp-content/uploads/2017/12/mcu-1024x614.jpg',
                  ]}
                  size="medium" />

                  <h2> Grid </h2>
                  <Row>
                    <Col size={4}></Col>
                    <Col size={4}></Col>
                    <Col size={4}></Col>
                    <Col size={6}></Col>
                    <Col size={8}></Col>
                    <Col size={12}></Col>
                    <Col size={10}></Col>
                </Row>

            </div>
        );
    }
}

export default App;
