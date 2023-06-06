import React, { useRef, useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import axios from "axios";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Home = () => {
  // use state projects =[]
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);
  return (
    <div>
      <Header />
      <section className="logos">
        <Container fluid>
          <Row>
            <Col lg={2} md={12} sm={12}>
              <span>Trusted By</span>
            </Col>
            <Col lg={2} md={6} sm={6}>
              <div className="box">
                <img src="img/pillar.png" alt="" className="piller" />
              </div>
            </Col>
            <Col lg={2} md={6} sm={6}>
              <div className="box">
                <img src="img/codesee.png" alt="" />
              </div>
            </Col>
            <Col lg={2} md={6} sm={6}>
              <div className="box">
                <img src="img/apex.png" alt="" className="apex" />
              </div>
            </Col>
            <Col lg={2} md={6} sm={6}>
              <div className="box">
                <img src="img/rimsys.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="dream">
        <Container fluid>
          <Row>
            <Col md={6} sm={12}>
              <div className="dream-left">
                <img src="img/waves.png" alt="" className="waves" />
                <img src="img/human.png" alt="" className="human" />
              </div>
            </Col>
            <Col md={6} sm={12} className="content">
              <div>
                <Link to="">
                  <Button variant="outline-danger" className="contact-btn">
                    Picture This
                  </Button>
                </Link>
                <p className="text-white">
                  Imagine having your sales team on the job 24/7, interacting
                  with an endless stream of ready-to-buy visitors.
                </p>
              </div>
            </Col>
            <Col sm={12}>
              <p className="text-white text-center">
                That's precisely what we will build{" "}
                <span>for your business.</span>
              </p>
            </Col>
            <Col className="text-center">
              <Button className="bttn">Let's talk</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="latest-builds" id="builds">
        <Container fluid>
          <Row>
            <Col className="heading">
              <h1 className="text-white">Latest builds.</h1>
              <Link to="/projects">
                View Projects
                <i class="fa-solid fa-angle-right"></i>
              </Link>
            </Col>
          </Row>
          <Swiper
            breakpoints={{
              // sm ==1
              0: {
                width: 0,
                slidesPerView: 1,
              },
              // md ==2
              768: {
                width: 768,
                slidesPerView: 2,
              },
              // lg ==3
              992: {
                width: 992,
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          >
            {projects.slice(1, 6).map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <a href={project.link}>
                    <img src={project.photo} alt="" />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </section>
      <section className="how-done" id="process">
        <Container fluid>
          <img src="img/waves.png" alt="" className="waves" />
          <h1 className="text-white text-center">How it's done.</h1>
          <Row>
            <Col sm={12} lg={6} md={6} className="content">
              <div className="parent">
                <img src="img/child2.png" alt="" />
                <div>
                  <h5 className="text-white">UX/UI Design</h5>
                  <p className="text-muted">
                    Where concepts turn into a strategic user-experience.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={{ span: 6, offset: 6 }} className="content">
              <div className="parent">
                <img src="img/child1.png" alt="" />
                <div>
                  <h5 className="text-white">Webflow Development</h5>
                  <p className="text-muted">Where design turns into code.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6} md={6} className="content">
              <div className="parent">
                <img src="img/setting.png" alt="" />
                <div>
                  <h5 className="text-white">System Automation</h5>
                  <p className="text-muted">Where busywork gets delegated.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={{ span: 6, offset: 6 }} className="content">
              <div className="parent">
                <img src="img/gg.png" alt="" />
                <div>
                  <h5 className="text-white">SEO</h5>
                  <p className="text-muted">
                    Where customers come flooding in.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services" id="services">
        <Container fluid>
          <h1 className="text-white text-center">Why Webflow.</h1>
          <Row>
            <Col lg={4} md={4} sm={12} className="content">
              <div className="child">
                <h6 className=" text-center">Person 1</h6>
                <h4 className="text-white  text-center">
                  Next-Level Storytelling
                </h4>
                <div className="img-content">
                  <img src="img/person1.png" alt="" />
                </div>
                <p className="text-muted  text-center">
                  Unleash the best visuals and experiences that modern web
                  design has to offer. Webflow turns your wildest of ideas into
                  strategic customer-experiences.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="content">
              <div className="child">
                <h6 className=" text-center">Person 2</h6>
                <h4 className="text-white  text-center">
                  Unbelievable Performance
                </h4>
                <div className="img-content">
                  <img src="img/person2.png" alt="" />
                </div>
                <p className="text-muted  text-center">
                  Hosted on an ultra-fast global CDN, Webflow goes full steam
                  ahead with load speed, uptime, asset optimization, and SEO.
                  All without ever needing to install a patch or upload a server
                  configuration.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="content">
              <div className="child">
                <h6 className=" text-center">Person 3</h6>
                <h4 className="text-white  text-center">
                  Developer-Free Tweaks
                </h4>
                <div className="img-content">
                  <img src="img/person3.png" alt="" />
                </div>
                <p className="text-muted  text-center">
                  Webflow’s ‘Editor Mode’ allows any team member to update
                  content as they please without wreaking havoc or paying people
                  like us to fix it.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-us" id="contact">
        <Container fluid>
          <h1 className="text-white text-center">Contact Us</h1>
          <Row>
            <Col md={6} sm={12} className="left-div">
              <div>
                <ul>
                  <li>
                    <span>Email:</span> <h5>info@gmail.com</h5>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <h5>0121133133131</h5>
                  </li>
                  <li>
                    <span>Address:</span> <h5>23 street newyork</h5>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <form>
                <div className="content">
                  <input type="text" placeholder="Name" name="Name" />
                  <input type="text" placeholder="Company" name="Company" />
                </div>
                <div className="content">
                  <input type="email" placeholder="Email" name="Email" />
                  <input type="Phone" placeholder="Phone" name="Phone" />
                </div>
                <div className="box">
                  <textarea placeholder="Message" rows={5}></textarea>
                </div>
                <input
                  type="submit"
                  value="send Message"
                  className="btn d-block"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
