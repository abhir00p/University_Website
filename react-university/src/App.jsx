import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Lottie from 'lottie-react'
import animationData from './assets/StudyAnimation.json';
import animationData1 from './assets/LogoAnimation.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {

  var navLinks = document.getElementById("nav-links");
  function showMenu()
  {
      navLinks.style.right = "0";
  }

  function hideMenu()
  {
      navLinks.style.right = "-200px";
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <div>
    <div className="parallax">
    <section className="header">
        <nav>
            <Lottie animationData={animationData1} style={{ width: '100px' }}/>
            <div className="nav-links" id="nav-links">
                <i className="fa fa-times-circle" onClick={hideMenu}></i>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">COURSE</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <div className="text-box">
            <h1>University Website</h1>
            <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.
            <br /> Curabitur eleifend, tortor at interdum varius. </p>
            <a href="" className="hero-btn">Visit us to know more</a>
        </div>
    </section>
    </div>

    
    <section className="course">
        
        <h1>Courses we offer</h1>
        <p>We offer a variety of courses so that students can choose whatever they like.</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Lottie animationData={animationData} style={{ width: '450px' }}/>
        </div>
        <div>
        <Carousel responsive={responsive}>
        <div className="course-col">
            <h3>Intermediate</h3>
            <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
        </div>
        <div className="course-col">
            <h3>Degree</h3>
            <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
        </div>
        <div className="course-col">
            <h3>Post Graduation</h3>
            <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
        </div>
        <div className="course-col">
            <h3>Graduation</h3>
            <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
        </div>
        </Carousel>
        </div>


    </section>

    <div className="parallax2">
    <section className="campus">
        <h1>Our Global Campus</h1>
        <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.</p>

        <div className="row">
            
            <div className="campus-col">
                <img src="..\images_web\london.png" />
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="..\images_web\newyork.png" />
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="..\images_web\washington.png" />
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </section>
</div>

{/* <!-- -------Facilities---------- --> */}

    <section className="facilities">
        <h1>Our Facilities</h1>
        <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.</p>
        <div className="row">
            <div className="facilities-col">
                <img src="../images_web/library.png" />
                <h3>World className Library</h3>
                <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.</p>
            </div>
            <div className="facilities-col">
                <img src="../images_web/basketball.png" />
                <h3>Largest Play Ground</h3>
                <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.</p>
            </div>
            <div className="facilities-col">
                <img src="../images_web/cafeteria.png" />
                <h3>Tasty and Healthy Food</h3>
                <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.</p>
            </div>
        </div>
    </section>

    <section className="testimonials">
        <h1>What our student says.</h1>
        <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.</p>

        <div className="row">
            <div className="testimonials-col">
                <img src="../images_web/user1.jpg" />
                <div>
                    <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
                    <h3>Christine Berkley</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>
            <div className="testimonials-col">
                <img src="../images_web/user2.jpg" />
                <div>
                    <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
                    <h3>David Byer</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                </div>
            </div>
        </div>
    </section>

{/* -----------------Image Library---------------------------- */}

    <div className='Library'>
    <h1>Image Library</h1>
    <p>Enjoy the lush campus life. Learn and grow together.</p>
    <div className='imageLibrary'>
    <Carousel responsive={responsive1}>
      <div className='Library_image'><img src="../images_web/campus1.jpg" /></div>
      <div className='Library_image'><img src="../images_web/campus2.jpg" /></div>
      <div className='Library_image'><img src="../images_web/campus3.jpg" /></div>
      <div className='Library_image'><img src="../images_web/campus4.jpg" /></div>
      <div className='Library_image'><img src="../images_web/campus5.jpg" /></div>
      <div className='Library_image'><img src="../images_web/campus6.jpg" /></div>
    </Carousel>
    </div>
    </div>



{/* <!-------------------Call to action-----------------------> */}

    <section className="cta">
        <h1>Enroll For Our Various Online Courses From <br />Anywhere Around The World</h1>
        <a href="" className="hero-btn">CONTACT US</a>
    </section>

{/* <!-- ----------Footer----------- --> */}
  <div className="parallax3">
  <section className="footer">
      <h4>About Us</h4>
      <p>A university experience fosters intellectual growth through in-depth exploration of a chosen field.<br />  Alongside specialized coursework, universities provide opportunities for research,ansd independent study</p>
      <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
      </div>
      <p>Made with <i className="fa fa-heart-o"> by Abhirup Das</i></p>
  </section>
  </div>
  </div>
  </>
  )
}

export default App
