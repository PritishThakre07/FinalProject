import React from 'react';
import './Footer.css';
import fb from './assets/facebook.svg';
import insta from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';
import git from './assets/github.svg';





const Footer = ()=>
{
    return(
        <div className='footer'>
            <div className='sb_footer section-padding'>
                <div className='sb_footer-links'>
                  <div className='sb_footer-links_div'>
                    <h4>For Business</h4>
                    <a href='/employee'>
                        <p>Employee</p>
                    </a>
                    <a href='/employee'>
                        <p>Employee</p>
                    </a>
                    <a href='/healthplan'>
                        <p>Health Plan</p>
                    </a>
                    <a href='/individual'>
                        <p>Individual</p>
                    </a>
                  </div>
                  <div className='sb_footer-links_div'>
                    <h4>Resources</h4>
                    <a href='/resource'>
                        <p>Resources Center</p>
                    </a>
                    <a href='/resource'>
                        <p>Testmonials</p>
                    </a>
                    <a href='/resource'>
                        <p>STV</p>
                    </a>
                  </div>
                  <div className='sb_footer-links_div'>
                    <h4>Resources</h4>
                    <a href='/employe'>
                        <p> Swing Tech</p>
                    </a>
                  </div>
                  <div className='sb_footer-links_div'>
                    <h4>Company</h4>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                    <a href='/press'>
                        <p>Press</p>
                    </a>
                    <a href='/career'>
                        <p>Career</p>
                    </a>
                    <a href='/Contact'>
                        <p>Contact</p>
                    </a>
                  </div>
                  <div className='sb_footer-links_div'>
                        <h4> Connect Us </h4>
                        <div className='socialmedia'>
                        <a href='https://www.linkedin.com/in/pritish-thakare-a6264b263/'><img src={linkedin} alt=""  /></a>
                        <a href='https://github.com/PritishThakre07'><img src={git} alt=""  /></a>
                        <a href='https://www.facebook.com/pritish.thakre.7'><img src={fb} alt="" /></a>
                        <a href='https://instagram.com/pritish_thakre?igshid=YmMyMTA2M2Y='><img src={insta} alt=""  /></a>
                        <a href='/https://www.linkedin.com/in/pritish-thakare-a6264b263/'><img src={twitter} alt=""  /></a>


                            
                            

                            
                            
                            {/* <p><img src={twitter} alt="" /></p>
                            <p><img src={linkedin} alt="" /></p>
                            <p><img src={insta} alt="" /></p>  */}
                        </div>
                  </div>
                </div>

                <hr></hr>
                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            {new Date().getFullYear()} All right reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        {/* <a href='/term'><div><p>Term & Conditions</p></div></a>
                        <a href='/privacy'><div><p>Privacy</p></div></a>
                        <a href='/security'><div><p>Security</p></div></a>
                        <a href='/cookie'><div><p>Cookie Declaration</p></div></a> */}
                        <p style={{wordSpacing:"20px"}}>Term&Conditions  Privacy Security Cookie Declaration</p>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Footer;