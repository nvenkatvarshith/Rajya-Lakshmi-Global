import logo from './../assets/rlg_logo.png'
import './../styles/Footer.css'
function Footer(){
    return (
        <div className='footer mt-3'>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} alt="RLG" width="200px" />
                    </div>
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;