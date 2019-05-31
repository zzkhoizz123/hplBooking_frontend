import React from 'react';
//import { Route } from 'react-router-dom';


class Home extends React.Component{
    render(){
        return (
            <div>
        {/* main banner */}
        <div className="main-top" id="home">
       
          
          {/* banner */}
          <div className="banner_w3lspvt position-relative">
            <div className="container">
              <div className="d-md-flex">
                <div className="w3ls_banner_txt">
                  <h3 className="w3ls_pvt-title">Đặt lịch <br /><span>khám bệnh</span></h3>
                  <p className="text-sty-banner">Chúng tôi cung cấp cho các bạn hệ thống đặt lịch khám bệnh nhanh chóng.</p>
                  <a href={"/about"} className="btn button-style mt-md-5 mt-4">Xem thêm</a>
                </div>
                <div className="banner-img">
                  <img src={require("../images/homedoctor.png")} alt="true" className="img-fluid" />
                 
                </div>
              </div>
            </div>
            {/* animations effects */}
            <div className="icon-effects-w3l">
              <img src={require("../images/shape1.png")} alt="true" className="img-fluid shape-wthree shape-w3-one" />
              <img src={require("../images/shape2.png")} alt="true" className="img-fluid shape-wthree shape-w3-two" />
              <img src={require("../images/shape3.png")} alt="true" className="img-fluid shape-wthree shape-w3-three" />
              <img src={require("../images/shape5.png")} alt="true" className="img-fluid shape-wthree shape-w3-four" />
              <img src={require("../images/shape4.png")} alt="true" className="img-fluid shape-wthree shape-w3-five" />
              <img src={require("../images/shape6.png")} alt="true" className="img-fluid shape-wthree shape-w3-six" />
            </div>
            {/* //animations effects */}
          </div>
          {/* //banner */}
        </div>
        {/* //main banner */}
        {/* what we do section */}
        <div className="what bg-li py-5" id="what">
          <div className="container py-xl-5 py-lg-3">
            <div className="row about-bottom-w3l text-center mt-4">
              <div className="col-lg-4 about-grid">
                <div className="about-grid-main">
                  <img src={require("../images/img1.png")} alt="true" className="img-fluid" />
                  <h4 className="my-4">Nhanh chóng</h4>
                  <p> Quá trình đặt lịch nhanh chóng trong vòng 1 phút.</p>
                  <a href="/about" className="button-w3ls btn mt-sm-5 mt-4">Xem thêm</a>
                </div>
              </div>
              <div className="col-lg-4 about-grid my-lg-0 my-5">
                <div className="about-grid-main">
                  <img src={require("../images/img3.png")} alt="true" className="img-fluid" />
                  <h4 className="my-4">Giá cả hợp lý</h4>
                  <p>Không phụ thu chi phí so với đặt lịch trực tiếp.</p>
                  <a href="/about" className="button-w3ls btn mt-sm-5 mt-4">Xem thêm</a>
                </div>
              </div>
              <div className="col-lg-4 about-grid">
                <div className="about-grid-main">
                  <img src={require("../images/img2.png")} alt="true" className="img-fluid" />
                  <h4 className="my-4">Bảo vệ thông tin</h4>
                  <p>Thông tin của bệnh nhân được bảo mật tuyệt đối.</p>
                  <a href="/about" className="button-w3ls btn mt-sm-5 mt-4">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //what we do section */}
        {/* middle */}
        <section className="midd-w3 py-5" id="faq">
          <div className="container py-xl-5 py-lg-3">
            <div className="row">
              <div className="col-lg-6 about-right-faq">
                <h6>Tiêu chí phục vụ</h6>
                <h3 className="text-da">Dịch vụ của chúng tôi </h3>
                <p className="mt-4">Sự hài lòng của bệnh nhân là sự trưởng thành của HplBooking</p>
                <ul className="w3l-right-book mt-4">
                  <li>Nhanh chóng</li>
                  <li>Tiện lợi</li>
                  <li>Không mất phí trung gian</li>
                  <li>Tiết kiệm thời gian chờ đợi</li>
                  <li>Hỗ trợ </li>
                </ul>
                <a href="/" className="btn button-style button-style-2 mt-sm-5 mt-4">Read More</a>
              </div>
              <div className="col-lg-6 left-wthree-img text-right">
                <img src={require("../images/b1.png")} alt="true" className="img-fluid mt-5" />
              </div>
            </div>
          </div>
        </section>
        {/* //middle */}
        {/* services */}
        {/* <section className="banner-bottom-w3layouts bg-li py-5" id="services">
          <div className="container py-xl-5 py-lg-3">
            <h3 className="tittle text-center font-weight-bold">Dịch vụ của chúng tôi</h3>
            <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <div className="row pt-lg-4">
              <div className="col-lg-4 about-in text-center">
                <div className="card">
                  <div className="card-body">
                    <div className="bg-clr-w3l">
                      <span className="fa fa-line-chart" />
                    </div>
                    <h5 className="card-title mt-4 mb-3">Business Growth</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 about-in text-center my-lg-0 my-3">
                <div className="card active">
                  <div className="card-body">
                    <div className="bg-clr-w3l">
                      <span className="fa fa-usd" />
                    </div>
                    <h5 className="card-title mt-4 mb-3">Financial Planning</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 about-in text-center">
                <div className="card">
                  <div className="card-body">
                    <div className="bg-clr-w3l">
                      <span className="fa fa-lightbulb-o" />
                    </div>
                    <h5 className="card-title mt-4 mb-3">Business Services</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* //services */}
        {/* stats */}
        <section className="bottom-count py-5" id="stats">
          <div className="container py-xl-5 py-lg-3">
            <div className="row">
              <div className="col-lg-5 left-img-w3ls">
                <img src={require("../images/b2.png")} alt="true" className="img-fluid" />
              </div>
              <div className="col-lg-7 right-img-w3ls pl-lg-4 mt-lg-2 mt-4">
                <div className="bott-w3ls mr-xl-5">
                  <h3 className="title-w3 text-bl mb-3 font-weight-bold">Một số thông tin</h3>
                  <p className="title-sub-2 mb-3">Hàng chục bệnh viện <br />và hàng ngàn bệnh nhân đã liên kết với chúng tôi</p>
                  {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium. </p> */}
                </div>
                <div className="row mt-5">
                  <div className="col-sm-4 count-w3ls">
                    <h4>40+</h4>
                    <p>Bệnh viện liên kết</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>4800+</h4>
                    <p>Bệnh nhân tin dùng</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>60000+</h4>
                    <p>Lượt đặt khám bệnh</p>
                  </div>
                </div>
                <div className="row mt-sm-5 mt-4">
                  <div className="col-sm-4 count-w3ls">
                    <h4>480+</h4>
                    <p>Bác sĩ</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>60+</h4>
                    <p>Đơn vị tài trợ</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>1000000+</h4>
                    <p>Lượt truy cập</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //stats */}
        {/* partners */}
        <section className="partners py-5" id="partners">
          <div className="container py-xl-5 py-lg-3">
            <h3 className="tittle text-center font-weight-bold">Đối tác của chúng tôi</h3>
            <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Các bệnh viện liên kết và các nhà tài trợ</p>
            <div className="row grid-part text-center pt-4">
              <div className="col-md-2 col-4">
                <div className="parts-w3ls">
                  {/* <a href="#"><span className="fa fa-angellist" /></a> */}
                  <img src={require("../images/logo_yduoc.svg")} />
                  <h4>Bệnh viện ĐHYD</h4>
                </div>
              </div>
              <div className="col-md-2 col-4">
                <div className="parts-w3ls">
                  {/* <a href="#"><span className="fa fa-opencart" /></a> */}
                  <img src={require("../images/13561895_Logotudu.jpg")} />
                  <h4>Bệnh viện Từ Dũ</h4>
                </div>
              </div>
              <div className="col-md-2 col-4">
                <div className="parts-w3ls">
                  <img src={require("../images/logo_footer_Benhviennhandan115.jpg")} />
        
                  <h4>Bệnh viện nhân dân 115</h4>
                </div>
              </div>
              <div className="col-md-2 col-4 mt-md-0 mt-4">
                <div className="parts-w3ls">
                  {/* <a href="#"><span className="fa fa-openid" /></a> */}
                  <img src={require("../images/logo cr.jpg")} />
                  <h4>Bệnh viện Chợ Rẫy</h4>
                </div>
              </div>
              <div className="col-md-2 col-4 mt-md-0 mt-4">
                <div className="parts-w3ls">
                  {/* <a href="#"><span className="fa fa-skyatlas" /></a> */}
                  <img src={require("../images/bvndgd.jpeg")} />
                  <h4>Bệnh viện Nhân dân Gia Định</h4>
                </div>
              </div>
              <div className="col-md-2 col-4 mt-md-0 mt-4">
                <div className="parts-w3ls">
                  {/* <a href="#"><span className="fa fa-ravelry" /></a> */}
                  <img src={require("../images/bvhv.png")} />
                  <h4>Bệnh viện Hùng Vương</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //partners */}

   
       
      </div>
        )
    }
}

export default Home;
