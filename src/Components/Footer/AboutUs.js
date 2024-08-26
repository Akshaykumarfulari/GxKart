import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AboutUs() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Custom Width Modal
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        The gxkart Group is one of India's leading digital commerce entities and includes group companies gxkart, Myntra, gxkart Wholesale, gxkart Health+ and Cleartrip. The Group is also a majority shareholder in PhonePe, one of the leading Payments Apps in India.

                        Started in 2007, gxkart has enabled millions of consumers, sellers, merchants, and small businesses to be a part of India's digital commerce revolution, with a registered customer base of more than 400 million, offering over 150 million products across 80+ categories. Our efforts to democratize commerce in India, drive access and affordability, delight customers, create lakhs of jobs in the ecosystem, and empower generations of entrepreneurs and MSMEs have inspired us to innovate on many industry firsts. gxkart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns – customer-centric innovations have made online shopping more accessible and affordable for millions of Indians. Together with its group companies, gxkart is committed to transforming commerce in India through technology.

                        With Catapult, gxkart aims to provide an umbrella solution to a budding brand's financing & marketing needs. The program offers marketing solutions and capital for new age direct-to-consumer brands to leapfrog into their next phase of growth. The offering goes beyond financing the brands by providing creative services and effective acquisition cost reduction solutions.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AboutUs;