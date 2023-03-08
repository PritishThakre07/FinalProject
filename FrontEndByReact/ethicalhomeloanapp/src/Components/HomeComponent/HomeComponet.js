import './HomeComponet.css';
import Homepage from '../HomeComponent/homepage.jpg';
import FooterCompent from './FooterComopent/FooterCompent';

const HomeComponet = ()=>{

    return(

        <div>


    <div className="wrapper">
        <div className="top_nav">
        <div >
          <button className="btn" style={{height: '40px', width:'80px',marginLeft:'80%',backgroundColor:'#17BEBE'}}>Login</button>
        </div>
        </div>
         <div className="manual">
        <div className="nav " data-spy="affix" data-offset-top="197">
          <nav className="navbar navbar-expand-lg navbar-dark bg-info">
           
            <input type="checkbox" id="click"
            />
           
            <ul>
              <li><a  href="#">Home</a></li>
              <li><a></a></li>

              <li><a routerlink="What we offer">What we Offer</a></li>
              <li><a></a></li>
              
              <li> <a routerlink="navigatetoaboutus()">About us</a></li>
              <li><a></a></li>
              <li><a routerlink="emicalculator" >Loan EMI calculator</a></li>
              <li><a></a></li>
              
              <li><a routerlink="enquiryform">Enquiry here</a></li>
              <li><a></a></li>
             
              
              <li><a routerlink="contactus">Contact Us</a></li>
             
              <li><a routerlink="contactus"></a></li>
              
              
            </ul>
            
          </nav>
    
          
        </div>
      </div>
        <div className="container-fluid" style={{height:'550px'}} id="images">
          <div className="container-fluid">
            
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* <!-- Indicators --> */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                <li data-target="#myCarousel" data-slide-to="7"></li>
                <li data-target="#myCarousel" data-slide-to="8"></li>
              </ol>
          
               {/* Wrapper for slides  */}
              <div className="carousel-inner">
                <div className="item active" id="educaion">
                  
                   
                     
                  <img src={Homepage} alt="Los Angeles" style={{width:"100%",height: "590px",}}/>
                  
                
                </div>
          
               
          
              {/* <!-- Left and right controls --> */}
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          
                
            
          
              
                <div className="screen2"> 
                     
                    </div>
                  </div>
                  </div>
                  </div>

                  <FooterCompent/>
        </div>









    )

}

export default HomeComponet;