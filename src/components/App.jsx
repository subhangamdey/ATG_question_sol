import React from "react";
import img1 from "./assets/BGimg.png";
import img2 from "./assets/Circle.png";
import img3 from "./assets/Union 1.png";
import img4 from "./assets/dp1.png";
import img5 from "./assets/dp2.png";
import img6 from "./assets/dp3.png";
import img7 from "./assets/dp4.png";
import img8 from "./assets/facebook_logo.png";
import img9 from "./assets/google_logo.png";
import img10 from "./assets/headerMD.png";
import img11 from "./assets/image1.png";
import img12 from "./assets/image2.png";
import img13 from "./assets/image3.png";
import img14 from "./assets/logo.png";
import img15 from "./assets/pen (1).png";
import img16 from "./assets/sidedp1.png";
import img17 from "./assets/sidedp2.png";
import img18 from "./assets/sidedp3.png";
import img19 from "./assets/sidedp4.png";
import img20 from "./assets/signimg.png";




function App() {
    return (
      <>
  <header>
    <nav className="navbar">
      <div className="max-width">
        <a href="mimage">
          <img className="logo" src={img14} alt="ATG.WORLD" />
        </a>
        <div className="search-container">
          <i className="search-icon fas fa-search" />
          <input
            type="text"
            id="search-input"
            placeholder="Search for your favourite groups in ATG"
          />
        </div>
        <div className="account" id="account">
          <p className="cacc">
            Create account.
            <a href="#" className="txtfree" id="signupButton">
              It's free!
              <i id="ddown" className="fa-sharp fa-solid fa-caret-down" />
            </a>
          </p>
        </div>
        <div className="accountCreated" id="accountCreated">
          <img className="dp" src={img4} alt="dp" />
          <p className="cacc">
            Siddharth Goyal
            <i id="ddown" className="fa-sharp fa-solid fa-caret-down" />
          </p>
        </div>
        {/*SignIn/Up card*/}
        <div className="overlay" id="signupOverlay">
          <div className="overlay-content">
            <span className="close" id="closeOverlay">
              <i className="fa-solid fa-xmark" />
            </span>
            <div className="card" id="card">
              <div className="form" id="form">
                {/*front*/}
                <div className="front">
                  <div className="statement">
                    <p>
                      Let's learn, share &amp; inspire each other with our
                      passion for computer engineering. Sign up now 🤘🏼
                    </p>
                  </div>
                  <h2>Sign In</h2>
                  <div className="inputbox">
                    <input
                      type="text"
                      required="required"
                      placeholder="Email"
                    />
                    <i />
                  </div>
                  <div className="inputbox">
                    <input
                      type="password"
                      required="required"
                      placeholder="Password"
                    />
                    <i />
                  </div>
                  <input type="submit" defaultValue="Sign In" id="create" />
                  <div className="facebookBox">
                    <img src={img8} alt="" />
                    <p>Sign in with Facebook</p>
                  </div>
                  <div className="googleBox">
                    <img src={img9} alt="" />
                    <p>Sign in with Google</p>
                  </div>
                  <div className="signup">
                    Don’t have an account yet?
                    <button className="sunow" onclick="flip()">
                      Create new for free!
                    </button>
                  </div>
                  <div className="links">
                    <a href="#">Forgot Password?</a>
                  </div>
                  <div className="minimalimg">
                    <img src={img20} alt="" />
                  </div>
                </div>
                {/* back */}
                <div className="back">
                  <div className="statement">
                    <p>
                      Let's learn, share &amp; inspire each other with our
                      passion for computer engineering. Sign up now 🤘🏼
                    </p>
                  </div>
                  <h2>Create Account</h2>
                  <div className="namebox">
                    <input
                      type="text"
                      required="required"
                      placeholder="First Name"
                    />
                    <i />
                    <input
                      type="text"
                      required="required"
                      placeholder="Last Name"
                    />
                    <i />
                  </div>
                  <div className="inputbox2">
                    <input
                      type="text"
                      required="required"
                      placeholder="Email"
                    />
                    <i />
                  </div>
                  <div className="inputbox2">
                    <input
                      type="password"
                      required="required"
                      placeholder="Password"
                    />
                    <i />
                  </div>
                  <div className="inputbox2">
                    <input
                      type="password"
                      required="required"
                      placeholder="Confirm Password"
                    />
                    <i />
                  </div>
                  <input
                    type="submit"
                    defaultValue="Create Account"
                    style={{ marginTop: 10 }}
                    id="submit"
                  />
                  <div className="facebookBox">
                    <img src={img8} alt="" />
                    <p>Sign in with Facebook</p>
                  </div>
                  <div className="googleBox">
                    <img src={img9} alt="" />
                    <p>Sign in with Google</p>
                  </div>
                  <div className="signup1">
                    Already have an account?
                    <button className="sunow1" onclick="flip1()">
                      Sign In
                    </button>
                  </div>
                  <div className="minimalimg">
                    <img src={img20} alt="" />
                  </div>
                  <div className="Terms">
                    <a href="#">
                      By signing up, you agree to our Terms &amp; conditions,
                      Privacy policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/*header*/}
  <section className="image-container">
    <img className="bgimg" src={img1} alt="reload please" />
    <div className="text-over-image">
      <h2 className="CEng">Computer Engineering</h2>
      <p className="countCE">142,765 Computer Engineers follow this</p>
    </div>
  </section>
  {/* mobile header*/}
  <section className="image-containerMD">
    <button className="joinBtn" id="joinBtn" onclick="toggleJoin(this)">
      Join Group
    </button>
    <div>
      <i className="fa fa-arrow-left" aria-hidden="true" />
    </div>
    <img className="bgimgMD" src={img10} alt="reload please" />
    <div className="text-over-imageMD">
      <h2 className="CEngMD">Computer Engineering</h2>
      <p className="countCEMD">142,765 Computer Engineers follow this</p>
    </div>
  </section>
  {/*catagories*/}
  <section className="category-container">
    <div className="max-width linew">
      <div className="category-list">
        <div className="category" onclick="toggleCategory('all')">
          All Posts(32)
        </div>
        <div className="category" onclick="toggleCategory('articles')">
          Article
        </div>
        <div className="category" onclick="toggleCategory('event')">
          Event
        </div>
        <div className="category" onclick="toggleCategory('education')">
          Education
        </div>
        <div className="category" onclick="toggleCategory('job')">
          Job
        </div>
      </div>
      <div className="inner-button">
        <button className="samebtn wrpo">
          Write a Post{" "}
          <i id="ddown" className="fa-sharp fa-solid fa-caret-down" />{" "}
        </button>
        <button
          className="samebtn jogr"
          id="groupButton"
          onclick="toggleGroupStatus()"
        >
          <i className="fa-sharp fa-solid fa-user-plus" /> Join Group
        </button>
      </div>
    </div>
    {/* mobile linew */}
    <div className="linewMD">
      <h3>Posts(368)</h3>
      <button>
        Filter: All <i id="ddown" className="fa-sharp fa-solid fa-caret-down" />
      </button>
    </div>
    <div className="side-bar">
      <div className="your-location">
        <i id="locc" className="fa-solid fa-location-dot" />
        <input
          type="text"
          id="search-input"
          placeholder="Enter your Location"
        />
        <p className="img-pen">
          <i className="fa-solid fa-pen" />
        </p>
      </div>
      <div className="others">
        <p className="note">
          <i className="fa-solid fa-circle-exclamation" /> Your location will
          help us serve better and extend a personalised experience.
        </p>
      </div>
      <div className="rec-grp">
        {/*follow list*/}
        <p className="rec-head">
          <i className="fa-regular fa-thumbs-up" /> RECOMMENDED GROUPS
        </p>
        <div className="sidedp content1">
          <div className="imgto">
            <img src={img16} alt="reload" />
            <p className="gtopic">Leisure</p>
          </div>
          <button className="follow" onclick="toggleFollow(this)">
            Follow
          </button>
        </div>
        <div className="sidedp content2">
          <div className="imgto">
            <img src={img17} alt="reload" />
            <p className="gtopic">Activism</p>
          </div>
          <button className="follow" onclick="toggleFollow(this)">
            Follow
          </button>
        </div>
        <div className="sidedp content3">
          <div className="imgto">
            <img src={img18} alt="reload" />
            <p className="gtopic">MBA</p>
          </div>
          <button className="follow" onclick="toggleFollow(this)">
            Follow
          </button>
        </div>
        <div className="sidedp content4">
          <div className="imgto">
            <img src={img18} alt="reload" />
            <p className="gtopic">Philosophy</p>
          </div>
          <button className="follow" onclick="toggleFollow(this)">
            Follow
          </button>
        </div>
      </div>
      <div className="see-more">
        <a className="sidown" href="#">
          See More...
        </a>
      </div>
    </div>
    {/*body content*/}
    <div className="category-content" id="all">
      {/*first card*/}
      <div className="Mainbox">
        <img className="aimg" src={img11} alt="reconnect" />
        <h2 className="its htype">✍️ Article</h2>
        <div className="regular-topic">
          <p className="its sheading">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button1">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content1">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <p className="its extra">
          I've worked in UX for the better part of a decade. From now on, I plan
          to rei...
        </p>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img4} alt="reload" />
            <p className="uname">Sarthak Kamra</p>
            <p className="viewsMd">1.4k views</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
          {/* views mobiel */}
          <div className="bel endMd">
            <div className="sharebtnMd">
              <i className="fa-sharp fa-solid fa-share-nodes" />
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
      {/*Second card*/}
      <div className="Mainbox">
        <img className="aimg" src={img12} alt="reconnect" />
        <h2 className="its htype">🔬 Education</h2>
        <div className="regular-topic">
          <p className="its sheading">
            Tax Benefits for Investment under National Pension Scheme Launched
            by Government
          </p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button2">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content2">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <p className="its extra">
          I've worked in UX for the better part of a decade. From now on, I plan
          to rei...
        </p>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img5} alt="reload" />
            <p className="uname">Sarah West</p>
            <p className="viewsMd2">4.8k views</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
          {/* views mobiel */}
          <div className="bel endMd">
            <div className="sharebtnMd">
              <i className="fa-sharp fa-solid fa-share-nodes" />
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
      {/*Third card*/}
      <div className="Mainbox">
        <img className="aimg" src={img13}alt="reconnect" />
        <h2 className="its htype">🗓️ Meetup</h2>
        <div className="regular-topic">
          <p className="its sheading">
            Finance &amp; Investment Elite Social Mixer @Lujiazui
          </p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button3">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content3">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <div className="dandl">
          <p>
            <i className="fa-regular fa-calendar" /> Fri, 12 Oct, 2018
          </p>
          <p>
            <i className="fa-solid fa-location-dot" /> Ahmedabad, India
          </p>
        </div>
        <button className="vweb onebox">Visit Website</button>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img6} alt="reload" />
            <p className="uname">Ronal Jones</p>
            <p className="viewsMd2">800 views</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
          {/* views mobiel */}
          <div className="bel endMd">
            <div className="sharebtnMd">
              <i className="fa-sharp fa-solid fa-share-nodes" />
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
      {/*Fouth card*/}
      <div className="Mainbox last">
        <h2 className="its htype">💼 Job</h2>
        <div className="regular-topic">
          <p className="its sheading">Software Developer</p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button4">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content4">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <div className="dandl">
          <p>
            <i className="fa-solid fa-suitcase" /> Innovaccer Analytics Private
            Ltd.
          </p>
          <p>
            <i className="fa-solid fa-location-dot" /> Noida, India
          </p>
        </div>
        <button className="vweb twobox">Apply on Timesjobs</button>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img7} alt="reload" />
            <p className="uname">Ronal Jones</p>
            <p className="viewsMd2">1.7k views</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
          {/* views mobiel */}
          <div className="bel endMd">
            <div className="sharebtnMd">
              <i className="fa-sharp fa-solid fa-share-nodes" />
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Articles*/}
    <div className="category-content" id="articles">
      <div className="Mainbox">
        <img className="aimg" src={img11} alt="reconnect" />
        <h2 className="its htype">✍️ Article</h2>
        <div className="regular-topic">
          <p className="its sheading">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button5">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content5">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <p className="its extra">
          I've worked in UX for the better part of a decade. From now on, I plan
          to rei...
        </p>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img4} alt="reload" />
            <p className="uname">Sarthak Kamra</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Events*/}
    <div className="category-content" id="event">
      <div className="Mainbox">
        <img className="aimg" src={img13} alt="reconnect" />
        <h2 className="its htype">🗓️ Meetup</h2>
        <div className="regular-topic">
          <p className="its sheading">
            Finance &amp; Investment Elite Social Mixer @Lujiazui
          </p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button6">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content6">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <div className="dandl">
          <p>
            <i className="fa-regular fa-calendar" /> Fri, 12 Oct, 2018
          </p>
          <p>
            <i className="fa-solid fa-location-dot" /> Ahmedabad, India
          </p>
        </div>
        <button className="vweb onebox">Visit Website</button>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img6} alt="reload" />
            <p className="uname">Ronal Jones</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Education*/}
    <div className="category-content" id="education">
      <div className="Mainbox">
        <img className="aimg" src={img12} alt="reconnect" />
        <h2 className="its htype">🔬 Education</h2>
        <div className="regular-topic">
          <p className="its sheading">
            Tax Benefits for Investment under National Pension Scheme Launched
            by Government
          </p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button7">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content7">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <p className="its extra">
          I've worked in UX for the better part of a decade. From now on, I plan
          to rei...
        </p>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img5} alt="reload" />
            <p className="uname">Sarah West</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Jobs*/}
    <div className="category-content" id="job">
      <div className="Mainbox last">
        <h2 className="its htype">💼 Job</h2>
        <div className="regular-topic">
          <p className="its sheading">Software Developer</p>
          <div className="dropdown">
            <div className="dropdown-button" id="dropdown-button8">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dropdown-content" id="dropdown-content8">
              <a href="#">Edit</a>
              <a href="#">Report</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
        <div className="dandl">
          <p>
            <i className="fa-solid fa-suitcase" /> Innovaccer Analytics Private
            Ltd.
          </p>
          <p>
            <i className="fa-solid fa-location-dot" /> Noida, India
          </p>
        </div>
        <button className="vweb twobox">Apply on Timesjobs</button>
        <div className="box-footer">
          <div className="bel profile">
            <img className="dp" src={img7} alt="reload" />
            <p className="uname">Ronal Jones</p>
          </div>
          <div className="bel end">
            <p className="views">
              <i id="eyeui" className="fa-regular fa-eye" />
              1.4k views
            </p>
            <div className="sharebtn">
              <i className="fa-sharp fa-solid fa-share-nodes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="pencil" id="signupButtonMd">
    <img className="logocircle" src={img2} alt="reload" />
    <img className="pencilicon" src={img15} alt="" />
  </div>
  {/* sign up md */}
  <div className="overlayMd" id="signupOverlayMd">
    <div className="overlay-content">
      <span className="close" id="closeOverlayMd">
        <i className="fa-solid fa-xmark" />
      </span>
      <div className="card" id="card">
        <div className="form" id="formMd">
          {/*front*/}
          <div className="front">
            <h2>Welcome Back!</h2>
            <div className="inputbox">
              <input type="text" required="required" placeholder="Email" />
              <i />
            </div>
            <div className="inputbox">
              <input
                type="password"
                required="required"
                placeholder="Password"
              />
              <i />
            </div>
            <input type="submit" defaultValue="Sign In" id="create" />
            <div className="facebookBox">
              <img src={img8} alt="" />
              <p>Sign in with Facebook</p>
            </div>
            <div className="googleBox">
              <img src={img9} alt="" />
              <p>Sign in with Google</p>
            </div>
            <div className="signup">
              <button className="sunow" onclick="flip2()">
                or, Create Account
              </button>
            </div>
            <div className="links">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="minimalimg">
              <img src={img20} alt="" />
            </div>
          </div>
          {/* back */}
          <div className="back">
            <h2>Create Account</h2>
            <div className="namebox">
              <input type="text" required="required" placeholder="First Name" />
              <i />
              <input type="text" required="required" placeholder="Last Name" />
              <i />
            </div>
            <div className="inputbox2">
              <input type="text" required="required" placeholder="Email" />
              <i />
            </div>
            <div className="inputbox2">
              <input
                type="password"
                required="required"
                placeholder="Password"
              />
              <i />
            </div>
            <div className="inputbox2">
              <input
                type="password"
                required="required"
                placeholder="Confirm Password"
              />
              <i />
            </div>
            <input
              type="submit"
              defaultValue="Create Account"
              style={{ marginTop: 10 }}
              id="submit"
            />
            <div className="facebookBox">
              <img src={img8} alt="" />
              <p>Sign in with Facebook</p>
            </div>
            <div className="googleBox">
              <img src={img9} alt="" />
              <p>Sign in with Google</p>
            </div>
            <div className="signup1">
              <button className="sunow1" onclick="flip3()">
                or, Sign In
              </button>
            </div>
            <div className="minimalimg">
              <img src={img20} alt="" />
            </div>
            <div className="Terms">
              <a href="#">
                By signing up, you agree to our Terms &amp; conditions, Privacy
                policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*javascript*/}
</>

    );
  }
  
  export default App;