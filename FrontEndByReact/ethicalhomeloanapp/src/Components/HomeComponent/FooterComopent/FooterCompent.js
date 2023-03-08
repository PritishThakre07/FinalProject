import logo from'../FooterComopent/logo.jpeg'

const FooterCompent =()=>{

    return(

        <div>
            {/* <!-- Footer --> */}
                <footer className="page-footer font-small blue my-footer pt-4 ">

            {/* <!-- Footer Links --> */}
            <div className="container-fluid text-center text-md-left">

                {/* <!-- Grid row --> */}
                <div className="row">

                {/* <!-- Grid column --> */}
                <div className="col-md-6 mt-md-0 mt-3">

                    {/* <!-- Content --> */}
                    <h3 className="text-uppercase " > <a  href="#" style={{color: 'aliceblue'}}><img src={logo}  height="50" alt=""/> ETHICAL HOME LOAN</a></h3>
                    <p>Here you can use rows and columns to organize your footer content.</p>

                </div>
                {/* <!-- Grid column --> */}

                <hr className="clearfix w-100 d-md-none pb-3"/>

                {/* <!-- Grid column --> */}
                <div className="col-md-3 mb-md-0 mb-3">

                    {/* <!-- Links --> */}
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">HOME LOAN</a>
                    </li>
                    <li>
                        <a href="#!">FURNITURE LOAN</a>
                    </li>
                    <li>
                        <a href="#!">HOME RENOVATION LOAN</a>
                    </li>
                    <li>
                        <a href="#!">HOME CONSTRUCTION LOAN</a>
                    </li>
                    </ul>

                </div>
                {/* <!-- Grid column -->

                <!-- Grid column --> */}
                <div className="col-md-3 mb-md-0 mb-3">

                    {/* <!-- Links --> */}
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">HOME EXTENSION LOAN</a>
                    </li>
                    <li>
                        <a href="#!">HOME IMPROVEMENT LOAN</a>
                    </li>
                    <li>
                        <a href="#!">HOME CONVERSION LOAN</a>
                    </li>
                    <li>
                        <a href="#!">NIR_HOME LOAN</a>
                    </li>
                    </ul>

                </div>
                {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links -->

            <!-- Copyright --> */}
            <div className="footer-copyright text-center py-3 my-coppyright">© 2020 Copyright:
                <a href="/"> Ethical Home Loan</a>
            </div>
            {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
                </div>
                
    )
}
export default FooterCompent;

