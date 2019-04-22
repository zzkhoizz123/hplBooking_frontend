import React from 'react';

class Contact extends React.Component {
  render() {
    return (
        <div>
        {/* //main banner */}
        {/* contact */}
        <div className="contact py-5" id="contact">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="row">
              <div className="col-lg-6">
                <img src={require("../images/b2.png")} alt="image" className="img-fluid" />
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                {/* contact form grid */}
                <div className="contact-top1">
                  <form action="#" method="post" className="contact-wthree-do">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>
                            First name
                          </label>
                          <input className="form-control" type="text" placeholder="Anderson" name="name" required />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                          <label>
                            Last name
                          </label>
                          <input className="form-control" type="text" placeholder="John" name="name" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>
                            Mobile
                          </label>
                          <input className="form-control" type="text" placeholder="xxxx xxxx xx" name="mobile" required />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                          <label>
                            Email
                          </label>
                          <input className="form-control" type="email" placeholder="example@mail.com" name="email" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <label>
                            Your message
                          </label>
                          <textarea placeholder="Add your Description here" name="message" className="form-control" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-cont-w3 btn-block mt-4">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* //contact form grid ends here */}
              </div>
            </div>
          </div>
        </div>
        {/* //contact*/}
        {/* map */}
        <div className="w3l-map p-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848295.9861393345!2d150.37152490226384!3d-33.846975938661174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney+NSW%2C+Australia!5e0!3m2!1sen!2sin!4v1515557909959" />
        </div>
        {/* //map */}
      </div>
     
    );
  }
}

export default Contact;
