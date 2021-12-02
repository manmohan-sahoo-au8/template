import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import '../styles/footer.css';
import avtar1 from '../images/1st.png';
import avtar2 from '../images/2nd.png';
import avtar3 from '../images/3rd.png';
import avtar4 from '../images/4th.png';

const FooterPage = () => {
  return (
    <div>
      <MDBFooter className="footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">Useful Links</h5>
              <ul>
                <li className="list-unstyled">About us</li>
                <li className="list-unstyled">Testimonal</li>
                <li className="list-unstyled">Our service</li>
                <li className="list-unstyled">support</li>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Gallery</h5>
              <ul>
                <img src={avtar1} alt="savtar" width="50%" />
                <img src={avtar2} alt="savtar" width="50%" />
                <img src={avtar3} alt="savtar" width="50%" />
                <img src={avtar4} alt="savtar" width="50%" />
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Contact</h5>
              <ul>
                <li className="list-unstyled">
                  Address: Lorem Ipsum is , simply, dummy
                </li>
                <li className="list-unstyled">Email: next@gmail.com</li>
                <li className="list-unstyled">Phone: 000000000</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      ;
    </div>
  );
};

export default FooterPage;
