import React from 'react'

function About() {
  return (
    <div>
        <>
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a
        href="index.html"
        className="logo d-flex align-items-center me-auto me-xl-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">CALVENT</h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about" className="active">
              About
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Service</span>
              <i className="bi bi-chevron-down toggle-dropdown" />
            </a>
            <ul>
              <li>
                <a href="/service">Shared CFO</a>
              </li>
              <li>
                <a href="/consulting">Consulting </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          {/*-
          <li class="dropdown">
            <a href="#"
              ><span>Dropdown</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i
            ></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown">
                <a href="#"
                  ><span>Deep Dropdown</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i
                ></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>*/}
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
      <a className="btn-getstarted" href="index.htmll#about">
        Get Started
      </a>
    </div>
  </header>
  <main className="main">
    <div id="call-to-action" className="call-to-action">
      <div className="about-section" data-aos="fade-up" data-aos-delay={100}>
        <div className="nav-links">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
        </div>
        <h1>About Us</h1>
        <div className="slant" />
        {/* Abstract Background Elements */}
        <div className="shape shape-1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="shape shape-2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        {/* Dot Pattern Groups */}
        <div className="dots dots-1">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="dot-pattern"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <circle cx={2} cy={2} r={2} fill="currentColor" />
            </pattern>
            <rect width={100} height={100} fill="url(#dot-pattern)" />
          </svg>
        </div>
        <div className="dots dots-2">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="dot-pattern-2"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <circle cx={2} cy={2} r={2} fill="currentColor" />
            </pattern>
            <rect width={100} height={100} fill="url(#dot-pattern-2)" />
          </svg>
        </div>
        <div className="shape shape-3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
    {/* /Hero Section */}
    {/* Stats Section */}
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="number purecounter" data-target={232}>
                0
              </span>
              <p>Clients</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="number purecounter" data-target={521}>
                0
              </span>
              <p>Projects</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="number purecounter" data-target={1453}>
                0
              </span>
              <p>Hours Of Support</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="number purecounter" data-target={32}>
                0
              </span>
              <p>Workers</p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
    {/* Call To Action Section */}
    <section id="call-to-action" className="call-to-action section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row content justify-content-center align-items-center position-relative">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 mb-4">Who We Are</h2>
            <p className="mb-4">
              Our journey began with the belief that clarity and adaptability
              are key to building a resilient organization. Sanath, our founder,
              brings in experience working with diverse businesses, helping them
              navigate financial challenges, uncover growth opportunities, and
              achieve sustainable success.
            </p>
            <a href="#" className="btn btn-cta">
              Learn More
            </a>
          </div>
          {/* Abstract Background Elements */}
          <div className="shape shape-1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="shape shape-2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          {/* Dot Pattern Groups */}
          <div className="dots dots-1">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="dot-pattern"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </pattern>
              <rect width={100} height={100} fill="url(#dot-pattern)" />
            </svg>
          </div>
          <div className="dots dots-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="dot-pattern-2"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </pattern>
              <rect width={100} height={100} fill="url(#dot-pattern-2)" />
            </svg>
          </div>
          <div className="shape shape-3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
    {/* /Call To Action Section */}
    {/* About Start */}
    <section className="about">
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
              <img className="img-fluid" src="assets/img/Seminar-pana.svg" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-inline-block border rounded-pill text-color px-4 mb-3">
                About Us
              </div>
              <h2 className="mb-4">How We Work</h2>
              <p className="mb-4">
                We believe in solutions rooted in practicality. By carefully
                analyzing your current operations, we identify areas where small
                changes can have a big impact. This includes creating financial
                strategies, improving cost management, and preparing for the
                future, our approach is suitable to meet the unique needs of
                your business. Every recommendation is clear, actionable, and
                designed to deliver measurable results.
              </p>
              <a className="btn btn-primary me-0 me-sm-2 mx-1" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About End */}
    {/* Testinomial Section */}
    {/* Testimonials Section */}
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
        </div>
      </div>
    </section>
    {/* /Stats Section */}
  </main>
  <footer>
    <div className="footer-container">
      <div className="footer-section">
        <h2>CALVENT</h2>
        <p>
          A108 Adam Street <br />
          New York, NY 535022
        </p>
        <p>
          <strong>Phone:</strong> +1 5589 55488 55
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-x-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-facebook" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Hic solutasept</h3>
        <ul>
          <li>
            <a href="#">Molestiae accusamus iure</a>
          </li>
          <li>
            <a href="#">Excepturi dignissimos</a>
          </li>
          <li>
            <a href="#">Suscipit distinctio</a>
          </li>
          <li>
            <a href="#">Dilecta</a>
          </li>
          <li>
            <a href="#">Sit quas consectetur</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Nobis illum</h3>
        <ul>
          <li>
            <a href="#">Ipsam</a>
          </li>
          <li>
            <a href="#">Laudantium dolorum</a>
          </li>
          <li>
            <a href="#">Dinera</a>
          </li>
          <li>
            <a href="#">Trodela</a>
          </li>
          <li>
            <a href="#">Flexo</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        © Copyright <strong>CALVENT</strong> All Rights Reserved
      </p>
    </div>
  </footer>
</>

    </div>
  )
}

export default About