import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import '../styles/footer.css';

const FooterPage = () => {
  return (
    <MDBFooter className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <ul className="ul">
              <h5 className="title">ABOUT</h5>

              <li className="list-unstyled">Lorem</li>
              <li className="list-unstyled">Lorem</li>
              <li className="list-unstyled">Lorem</li>
              <li className="list-unstyled">Lorem</li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul className="ul">
              <h5 className="title">CONTACT</h5>

              <li className="list-unstyled">
                Address: Lorem Ipsum is , simply, dummy
              </li>
              <li className="list-unstyled">Email: next@gmail.com</li>
              <li className="list-unstyled">Phone: 000000000</li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul className="ul">
              <h5 className="title">SERVICES</h5>
              <li className="list-unstyled">Lorem</li>
              <li className="list-unstyled">Lorem</li>
              <li className="list-unstyled">Lorem</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
