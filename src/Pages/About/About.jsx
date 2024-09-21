import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div id="About">
      <div className="aboutus">
      <h2>About Us</h2>
    <p>Welcome to [Sneakers Company]! We are passionate about
   delivering high-quality, stylish,
   and comfortable sneakers that fit your active lifestyle.</p>
      </div>
<div className="mission">
<h2>Our Mission</h2>
   <p>Our mission is to create sneakers that
     not only look great but also feel amazing on your feet, 
     whether you're running, working out, or just hanging out.</p>
</div>
   <div className="story">
   <h2>Our Story</h2>
     <p>[Sneakers Company] started with a simple idea: 
      to make high-performance sneakers that combine 
      cutting-edge technology with sleek designs. Over the years,
       we've grown into a brand that athletes and
        sneaker enthusiasts alike trust and love.</p>
   </div>
     <div className="chooseus">
     <h2>Why Choose Us?</h2>
      <ul>
        <li>Innovative design and technology</li>
        <li>Comfort-driven materials</li>
        <li>Durability and long-lasting performance</li>
        <li>Environmentally friendly manufacturing</li>
      </ul>
     </div>
       
    <div className="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to learn more, feel free to 
      <Link to="/contact"><span>contact us</span></Link>.</p>
      </div>  
      
   
</div>
    

  )
}

export default About