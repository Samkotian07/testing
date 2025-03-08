import React from 'react'

function Blog() {
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
            <a href="/blog" className="active">
              Blog
            </a>
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
    <div id="call-to-action" className="call-to-action">
      <div className="about-section" data-aos="fade-up" data-aos-delay={100}>
        <div className="nav-links">
          <a href="index.html">HOME</a>
          <a href="#">Blog</a>
        </div>
        <h1>Blog</h1>
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
    {/* Blog Section */}
    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("assets/img/image_1.jpg")' }}
              ></a>
              <div className="text p-4 d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">July 12, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry" data-aos-delay={100}>
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("assets/img/image_2.jpg")' }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-3">
                  <div>
                    <a href="#">July 12, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry" data-aos-delay={200}>
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("assets/img/image_3.jpg")' }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-3">
                  <div>
                    <a href="#">July 12, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("assets/img/image_4.jpg")' }}
              ></a>
              <div className="text p-4 d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">July 12, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry" data-aos-delay={100}>
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("assets/img/image_5.jpg")' }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-3">
                  <div>
                    <a href="#">July 12, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry" data-aos-delay={200}>
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("assets/img/image_6.jpg")' }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-3">
                  <div>
                    <a href="#">July 12, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Blog Section */}
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

export default Blog