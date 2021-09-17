import React from 'react'
import './Style.css'

function Navbar() {
    return (<div>
            
            <header class="site-navbar js-sticky-header site-navbar-target" role="banner">

<div class="container">
  <div class="row align-items-center position-relative">


    <div class="site-logo">
      <a href="index.html" class="text-black"><span class="text-primary">Brand</span> </a>
    </div>

    <div class="col-12">
      <nav class="site-navigation text-center" role="navigation" style={{justifyContent:'center'}}>

        <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
          <li><a href="#home-section" class="nav-link">Home</a></li>
          <li><a href="#services-section" class="nav-link">Services</a></li>


          <li class="has-children">
            <a href="#about-section" class="nav-link">About Us</a>
            <ul class="dropdown arrow-top">
              <li><a href="#team-section" class="nav-link">Team</a></li>
              <li><a href="#pricing-section" class="nav-link">Pricing</a></li>
              <li><a href="#faq-section" class="nav-link">FAQ</a></li>
              <li class="has-children">
                <a href="#">More Links</a>
                <ul class="dropdown">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a href="#why-us-section" class="nav-link">Why Us</a></li>

          <li><a href="#testimonials-section" class="nav-link">Testimonials</a></li>
          <li><a href="#blog-section" class="nav-link">Blog</a></li>
          <li><a href="#contact-section" class="nav-link">Contact</a></li>
        </ul>
      </nav>

    </div>

    <div class="toggle-button d-inline-block d-lg-none"><a href="#" class="site-menu-toggle py-5 js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

  </div>
</div>

</header>

            
<div class="scrollmenu">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="#support">Support</a>
  <a href="#blog">Blog</a>
  <a href="#tools">Tools</a>  
  <a href="#base">Base</a>
  <a href="#custom">Custom</a>
  <a href="#more">More</a>
  <a href="#logo">Logo</a>
  <a href="#friends">Friends</a>
  <a href="#partners">Partners</a>
  <a href="#people">People</a>
  <a href="#work">Work</a>
</div>


        </div>
    )
}





export default Navbar
