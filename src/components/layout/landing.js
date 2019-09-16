import React from "react";
import Menu from "./menu";

const LandingLeft = () => {
  return (
    <div className="bg-light content-left">
          <div className="card m-auto p-3" style={{ opacity: '.8' }}>
            <h1 className="text-black">Welcome to Food Fast Food Sellers</h1>
            <p className="welcome-text">
                We at the Food Fast Food Sellers believe in that a customer should be served well with
                his preferences. We welcome all into our caffes and also our online services are always
                available.<br />
                Meet our qualified team of waiters and waitresses who are well in quenching your thirst <br />
                and your hunger
            </p>
            <h3 className="text-black">Our Pride</h3>
            <p className="welcome-text">
                We pride ourselves among the best in the whole continent of Africa. We were rated the best by <br />
                Synnovate.<br />
                Remember your satisfaction is our pride
            </p>
          </div>
        </div>
  );
}

const LandingRight = () => {
  return (
    <div className="landingright">
    <div className="bg-dark card m-auto p-2">
      <div className="rightside">
        <h4 className="text-maroon">News</h4>
        <p className="new-text">
             Starting from the next year we are going to extend our services to the Northern part of Africa.<br />
             You are thus welcome
        </p>
        <h4 className="text-maroon">Other News</h4>
        <p className="new-text">
             Starting from the next year we are going to extend our services to the Northern part of Africa.<br />
             You are thus welcome
        </p>
        <h4 className="text-maroon">Offers</h4>
        <p className="new-text">

            Check on our menus for the hot friendly offers available in this festive season
        </p>
      </div>
    </div>
    </div>
  );
}

const Landing = () => {
  return (
    <div className="menu">
      <div className="row">
        <div className="col-md-8">
          <LandingLeft />
        </div>
        <div className="col-md-4">
          <LandingRight />
        </div>
        <div className="col-md-10 m-auto">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Landing;
