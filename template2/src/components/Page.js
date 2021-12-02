import React from 'react';
import avtar from '../images/avtar.png';
import savtar from '../images/savtar.png';
import choose from '../images/choose.png';
import question from '../images/question.png';
import food from '../images/food.png';
import watch from '../images/watch.png';
import review1 from '../images/review1.png';
import review2 from '../images/review2.png';
import review3 from '../images/review3.png';
import { Button, Card } from 'react-bootstrap';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <p>welcome to [company name]</p>
          <h1>We Build Amazing </h1>
          <h1>DESIGN </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, ut
            quam pellentesque libero, posuere. In elementum praesent amet,
            mauris morbi adipiscing ultrices. Viverra aliquet dignissim vitae
            sagittis nullam urna, feugiat.
          </p>
          <Button variant="danger">Get Started</Button>
          <Button variant="light">How it work</Button>
          <img src={avtar} alt="avtar" width="100%" />
        </div>
        <div className="container">
          <Button>About us</Button>
          <div className="row">
            <div className="col-md-4 text-center">
              <h1>Engaging new audience through smart approach</h1>
              <h3>H3 subheading Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
                augue sem eu pretium, quam faucibus. Aliquam vulputate diam quis
                sed varius. Faucibus sagittis magna molestie congue.
              </p>
              <Button variant="light">Know Details</Button>
            </div>
            <div className="col-md-4 text-center">
              <img src={savtar} alt="savtar" width="50%" />
            </div>
            <div className="col-md-4 text-center">
              <h1>Our Unique Selling Proposition</h1>
              <p>Innovative concepts</p>
              <p>24*7 Services Available</p>
              <p>On-time Delivery</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
                augue sem eu pretium, quam faucibus.
              </p>
              <Button variant="light">Explore all Services</Button>
            </div>
          </div>
        </div>
        <div>
          <Button variant="light">Projects</Button>
          <h1>Our project for clients</h1>
          <p>
            consectetur adipiscing elit. Lobortis diam vivamus vitae vulputate
            aliquet dictumst netus. Nisl tortor, sed donec quam.
          </p>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={choose} alt="choose" width="50%" />
            </div>
            <div className="col-md-4 text-center">
              <img src={watch} alt="watch" width="50%" />
            </div>
            <div className="col-md-4 text-center">
              <img src={food} alt="food" width="50%" />
            </div>
          </div>
        </div>
        <div>
          <Button variant="light">Blogs</Button>
          <h1>From the Blogs</h1>

          <div className="row">
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review1} />
                <Card.Body>
                  <Card.Title>H3 subheading Lorem ipsum dolor sit</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mollis augue sem eu pretium, quam faucibus. Aliquam
                    vulputate diam quis sed varius.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review2} />
                <Card.Body>
                  <Card.Title>H3 subheading Lorem ipsum dolor sit</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mollis augue sem eu pretium, quam faucibus. Aliquam
                    vulputate diam quis sed varius.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review3} />
                <Card.Body>
                  <Card.Title>H3 subheading Lorem ipsum dolor sit</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mollis augue sem eu pretium, quam faucibus. Aliquam
                    vulputate diam quis sed varius.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <Button variant="light">Solutions</Button>
          <h1>Perfect Solution For Your Business</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
            augue sem eu pretium, quam faucibus. Aliquam vulputate diam quis sed
            varius.{' '}
          </p>

          <div className="row">
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review1} />
                <Card.Body>
                  <Card.Title>Grow Your Business</Card.Title>
                  <Card.Text>
                    We always help your company to grow with us
                  </Card.Text>
                </Card.Body>
                <Button variant="light">Learn More</Button>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review2} />
                <Card.Body>
                  <Card.Title>Drive More Sales</Card.Title>
                  <Card.Text>
                    Every company that we handled. We always drive more sales.
                  </Card.Text>
                </Card.Body>
                <Button variant="danger">Learn More</Button>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review3} />
                <Card.Body>
                  <Card.Title>Handled By Expert</Card.Title>
                  <Card.Text>
                    You don’t need to worry because we are professional.
                  </Card.Text>
                </Card.Body>
                <Button variant="light">Learn More</Button>
              </Card>
            </div>
          </div>
        </div>
        <div className="container">
          <Button variant="light">FAQ</Button>
          <h1>Have question in mind? Let us help you</h1>
          <div className="row">
            <div className="col-sm-6 text-center">
              <img src={question} alt="question" width="50%" />
            </div>
            <div className="col-sm-6 text-center">
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <h4>Frequently Asked Question</h4>
                  <p>1.Question lorem ipsum? </p>
                  <p>2.Question lorem ipsum?</p>
                  <p>3.Question lorem ipsum?</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
