import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';

/**
 * Footer component
 */
export default function Footer() {
  const [showModal, setShowModal] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = () => {
    if (value !== '') {
      toast(value + ' Thank You for Subscribing');
      setValue("");
    }
  };

  const handleModal = (modalName) => {
    setShowModal(showModal === modalName ? null : modalName);
  };

  const renderModalContent = (modalName) => {
    let modalContent = null;

    if (modalName === 'aboutUs') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'aboutUs'}
          onHide={() => handleModal('aboutUs')}
          aria-labelledby="example-modal-sizes-title-aboutUs"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              About Us
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The Gxkart Group is one of India's leading digital commerce entities and includes group companies Gxkart, Myntra, Gxkart Wholesale, Gxkart Health+ and Cleartrip. The Group is also a majority shareholder in PhonePe, one of the leading Payments Apps in India.
              <br></br><br></br>
              Started in 2007, Gxkart has enabled millions of consumers, sellers, merchants, and small businesses to be a part of India's digital commerce revolution, with a registered customer base of more than 400 million, offering over 150 million products across 80+ categories. Our efforts to democratize commerce in India, drive access and affordability, delight customers, create lakhs of jobs in the ecosystem, and empower generations of entrepreneurs and MSMEs have inspired us to innovate on many industry firsts. Gxkart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns – customer-centric innovations have made online shopping more accessible and affordable for millions of Indians. Together with its group companies, Gxkart is committed to transforming commerce in India through technology.
            </p>
          </Modal.Body>
        </Modal>
      );
    }
    else if (modalName === 'careers') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'careers'}
          onHide={() => handleModal('careers')}
          aria-labelledby="example-modal-sizes-title-careers"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Careers at Gxkart
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Join us on our journey to revolutionize e-commerce and make a meaningful impact.
              At Gxkart, we believe in fostering an environment of innovation, collaboration,
              and continuous learning.
            </p>
            <p>
              Explore exciting career opportunities across various domains including technology,
              operations, marketing, and more. We value diverse perspectives and are committed
              to creating an inclusive workplace that encourages growth and creativity.
            </p>
            <p>
              Visit our <a href="https://careers.flipkart.com/" target="_blank" rel=" noreferrer">Careers Page</a> to discover current job openings and embark on a rewarding career with Flipkart.
            </p>
          </Modal.Body>
        </Modal>
      );
    }
    else if (modalName === 'contactUs') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'contactUs'}
          onHide={() => handleModal('contactUs')}
          aria-labelledby="example-modal-sizes-title-contactUs"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Contact Us
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <span style={{ fontWeight: "bold" }}>Gxkart Help Center | 24x7 Customer Care Support</span><br></br><br></br>
              You may also reach out to Gxkart customer care at 1800-208-9898.
            </p>
          </Modal.Body>
        </Modal>
      );
    }

    else if (modalName === 'sizeGuide') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'sizeGuide'}
          onHide={() => handleModal('sizeGuide')}
          aria-labelledby="example-modal-sizes-title-sizeGuide"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Size Guide
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <img src="https://www.thestiffcollar.com/cdn/shop/products/PETER-ENGLAND-Solid-Men-Polo-Neck-Yellow-T-Shirt-Buy-PETER-ENGLAND-Solid-Men-Polo-Neck-Yellow-T-Shirt-Online-at-Best-Prices-in-India-Flipkart-com_1024x1024.png?v=1674474960" style={{ width: "750px" }} />
            </p>
          </Modal.Body>
        </Modal>
      );
    }

    else if (modalName === 'shippingInformation') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'shippingInformation'}
          onHide={() => handleModal('shippingInformation')}
          aria-labelledby="example-modal-sizes-title-shippingInformation"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Shipping Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <span style={{ fontWeight: "bold" }}>What are the delivery charges?</span><br></br><br></br>
              Delivery charge varies with each Seller. <br /><br />

              Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs. Please check your order summary to understand the delivery charges for individual products.<br /><br />

              For Products listed as Flipkart Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.
            </p>
          </Modal.Body>
        </Modal>
      );
    }

    else if (modalName === 'cancellationReturns') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'cancellationReturns'}
          onHide={() => handleModal('cancellationReturns')}
          aria-labelledby="example-modal-sizes-title-cancellationReturns"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Order Cancellation and Return Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <span style={{ fontWeight: "bold" }}>Order Cancellation and Return Policy</span><br></br><br></br>
              The customer can choose to cancel an order any time before it's dispatched. The order cannot be canceled once its out for delivery. However, the customer may choose to reject it at the doorstep.<br /><br />

              The time window for cancellation varies based on different categories and the order cannot be canceled once the specified time has passed.

            </p>
          </Modal.Body>
        </Modal>
      );
    }

    else if (modalName === 'Payments') {
      modalContent = (
        <Modal
          size="lg"
          show={showModal === 'Payments'}
          onHide={() => handleModal('Payments')}
          aria-labelledby="example-modal-sizes-title-Payments"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Payments
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <span style={{ fontWeight: "bold" }}>How do I pay for a Flipkart purchase?</span><br></br><br></br>
              Flipkart offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that Flipkart's trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.
              <br></br><br></br>
              You may use Internet Banking, Gift Card, Cash on Delivery and Wallet to make your purchase.
              <br></br><br></br>
              Flipkart also accepts payments made using Visa, MasterCard, Maestro and American Express credit/debit cards in India and 21 other countries.
              <br></br><br></br>
              We accept payments made by credit/debit cards issued in India and 21 other countries.
            </p>
          </Modal.Body>
        </Modal>
      );
    }

    return modalContent;
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className="container my-">
        <footer className="text-center text-lg-start mt-xl-5 pt-4">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase text-white mb-4">OUR WORLD</h5>
                <ul className="list-unstyled mb-4" style={{ cursor: "pointer" }}>
                  <li>
                    <a className="text-white" onClick={() => handleModal('aboutUs')}>
                      About Us
                    </a>
                    {renderModalContent('aboutUs')}
                  </li>
                  <li>
                    <a href="https://www.flipkartwholesale.com/" className="text-white" target='_blank' rel=" noreferrer">Flipkart Wholesale</a>

                  </li>
                  <li>
                    <a href="https://stories.flipkart.com/category/top-stories/news/" className="text-white" target='_blank' rel=" noreferrer">Press</a>

                  </li>
                  <li>
                    <a href="https://stories.flipkart.com/" className="text-white" target='_blank' rel=" noreferrer">Flipkart Stories</a>

                  </li>
                  <li>
                    <a className="text-white" onClick={() => handleModal('careers')}>
                      Careers
                    </a>
                    {renderModalContent('careers')}

                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">Assistance</h5>
                <ul className="list-unstyled" style={{ cursor: "pointer" }}>
                  <li>
                    <a className="text-white" onClick={() => handleModal('contactUs')}>
                      Contact Us
                    </a>
                    {renderModalContent('contactUs')}
                  </li>
                  <li>
                    <a className="text-white" onClick={() => handleModal('sizeGuide')}>
                      Size Guide
                    </a>
                    {renderModalContent('sizeGuide')}
                    <a className="text-white"></a>
                  </li>
                  <li>
                    <a className="text-white" onClick={() => handleModal('shippingInformation')}>
                      Shipping Information
                    </a>
                    {renderModalContent('shippingInformation')}
                  </li>
                  <li>
                    <a className="text-white" onClick={() => handleModal('cancellationReturns')}>
                      Cancellation and Return
                    </a>
                    {renderModalContent('cancellationReturns')}
                  </li>
                  <li>
                    <a className="text-white" onClick={() => handleModal('Payments')}>
                      Payments
                    </a>
                    {renderModalContent('Payments')}
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">Social</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.instagram.com/flipkart/?hl=en" className="text-white" target='_blank' rel=" noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/flipkart/" className="text-white" target='_blank' rel=" noreferrer">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/flipkart" className="text-white" target='_blank' rel=" noreferrer">YouTube</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">Sign up to our newsletter</h5>
                <div className="mb-4 text-white">
                  <input type="email" id='inputemail' placeholder='Enter your Email' value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <button onClick={handleChange} type="submit" style={{ backgroundColor: "blue", color: "white", fontWeight: "300px" }}>Subscribe</button>
                <ToastContainer />
              </div>

            </div>
          </div>

          <div className="text-center p-3 text-white">
            © 2024 GalaxE solutions
          </div> 
        </footer>
      </div>
    </div>
  );
}
