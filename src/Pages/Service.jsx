import React from 'react'

function Service() {
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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
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
            <a href="/contact">Contact</a>
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
    <div id="call-to-action" className="call-to-action ">
      <div className="about-section " data-aos="fade-up" data-aos-delay={100}>
        <div className="nav-links">
          <a href="index.html">HOME</a>
          <a href="#">Service</a>
        </div>
        <h1>Shared CFO</h1>
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
    {/* Features Start */}
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
              Service
            </div>
            <h2 className="mb-4">Shared CFO Services</h2>
            <p>
              Managing your business’s finances doesn’t have to feel
              overwhelming. If hiring a full-time CFO isn’t an option, this
              service bridges the gap by offering professional financial
              guidance. Ideal for startups and growing businesses, we help you
              handle everything from creating budgets to improving cash flow.
              With practical solutions suitable to your goals, we ensure your
              business has the financial foundation it needs to grow
              sustainably.
            </p>
            <h6>What’s Included:</h6>
            <ul>
              <li>
                <a href="#">
                  Crafting financial plans that align with your business goals{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  Managing cash flow to ensure stability and growth
                </a>
              </li>
              <li>
                <a href="#">
                  Keeping track of budgets to avoid unnecessary expenses
                </a>
              </li>
              <li>
                <a href="#">
                  Providing actionable insights for better financial decisions
                </a>
              </li>
            </ul>
            <p />
          </div>
          {/* List */}
          <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
            <img className="img-fluid" src="assets/img/Site Stats-cuate.svg" />
          </div>
        </div>
      </div>
      {/* Features End */}
      {/*FAQ*/}
      {/* List */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-title" onclick="toggleFAQ(this)">
              Will this service work for small startups?
              <span>+</span>
            </div>
            <div className="faq-content">
              Yes, it’s specifically designed to support businesses with limited
              resources, offering the expertise you need to manage your finances
              effectively.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-title" onclick="toggleFAQ(this)">
              How involved will you be in our operations? <span>+</span>
            </div>
            <div className="faq-content">
              We can customize our involvement based on your needs—whether it’s
              providing periodic reviews or more frequent hands-on assistance.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-title" onclick="toggleFAQ(this)">
              Can this help with investor funding? <span>+</span>
            </div>
            <div className="faq-content">
              Definitely. We assist with financial forecasts, business plans,
              and other essentials to present your business in the best possible
              light to potential investors.
            </div>
          </div>
        </div>
      </section>
      {/* FAQ END */}
    </div>
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

export default Service