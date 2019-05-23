import React from 'react';
// import ScrollUpButton from "react-scroll-up-button";

class Footer extends React.Component {
  render() {
    return (
      <div className="copy-bottom bg-li py-4 border-top">
        <div className="container-fluid">
          <div className="d-md-flex px-md-3 position-relative text-center">
            {/* footer social icons */}
            <div className="social-icons-footer mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            {/* //footer social icons */}
            {/* copyright */}
            <div className="copy_right mx-md-auto mb-md-0 mb-3">
              <p className="text-bl let">© 2019 HplBooking
              </p>
            </div>
            {/* //copyright */}
            {/* move top icon */}
            <a href="#" className="move-top text-center">
              <span className="fa fa-level-up" aria-hidden="true" />
            </a>
          </div>
        </div>


    

      </div>
    );
  }
}

export default Footer;
