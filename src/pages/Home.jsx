import "../styles/Home.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import ProjectLink from "../components/ProjectLink";
import LayoutAimate from "../components/LayoutAimate";
import ReactJSImg from "../assets/react.jpg";
import ReduxJsImg from "../assets/redux.jpg";
import Avatar from "../assets/avatar.jpg";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <LayoutAimate title="home">
      <div className="home">
        <Helmet>
          <title>Home - Abd Elhaid</title>
        </Helmet>
        <div className="title apple-font">
          Hello, I'm a new react developer based in Palestine!
        </div>
        <div className="profile-container">
          <div className="skill-title">
            <h1>Abd Elhadi</h1>
            <p className="apple-font">
              Programming ( Web / Android ) Developer
            </p>
          </div>
          <div className="profile-avatar">
            <img src={Avatar} alt="" />
          </div>
        </div>
        <div className="work-describe">
          <p className="section-title">Work</p>
          <p className="describe-text">
            Hello my name Abd Elhadi and I am 21 years ago and I am an android
            developer and I start to learn React JS,I want to become
            Full-Stack-Developer with React end of the 2022.
          </p>
        </div>
        <button className="portfolio-btn">
          <a href="/works" className="apple-font" target="_self">
            My portfolio <span>&nbsp;&nbsp;</span>
            <MdOutlineKeyboardArrowRight />
          </a>
        </button>
        <div className="bio-describe">
          <p className="section-title">Bio</p>
          <BioItem
            title="2018"
            text="Start study programming and databases in UCAS."
          />
          <BioItem
            title="2020"
            text="Complete the diploma in programming and databases."
          />
          <BioItem
            title="2021/11"
            text="Start learning Html, CSS, Javascript, ES6, DOM, React JS, Hooks, Redux, MUI and more."
          />
        </div>
        <div className="i-love">
          <p className="section-title">I ♥</p>
          <p className="apple-font">
            Learning new stuff in programming, Playing some online game.
          </p>
        </div>
        <div className="social-links">
          <p className="section-title">On the web</p>
          <ul>
            <SocialItem
              icon={<IoLogoGithub className="social-icon" />}
              link="https://www.github.com/"
              user="@abd_elhaid"
            />
            <SocialItem
              icon={<BsInstagram />}
              link="https://www.instagram.com/"
              user="@abd_elhaid"
            />
            <SocialItem
              icon={<BsFacebook />}
              link="https://www.facebook.com/"
              user="@abd_elhaid"
            />
            <SocialItem
              icon={<AiOutlineTwitter />}
              link="https://www.twitter.com/"
              user="@abd_elhaid"
            />
          </ul>
        </div>
        <div className="project-links">
          <ProjectLink
            img={ReactJSImg}
            title="React JS"
            subTitle="Laren react js"
          />
          <ProjectLink
            img={ReduxJsImg}
            title="Node JS"
            subTitle="Laren node js"
          />
        </div>
        <button className="portfolio-btn" style={{ marginBottom: "0px" }}>
          <a href="/posts" className="apple-font" target="_self">
            Popular posts <MdOutlineKeyboardArrowRight />
          </a>
        </button>
      </div>
    </LayoutAimate>
  );
}

export default Home;

const BioItem = ({ title, text }) => (
  <div className="bio-item apple-font">
    <span className="bio-item-title">{title}</span>
    {text}
  </div>
);

const SocialItem = ({ icon, user, link }) => (
  <li className="social-item">
    <a href={link} target="_blank" rel="noreferrer">
      <button className="social-item-btn apple-font">
        {icon}
        <span className="username apple-font">{user}</span>
      </button>
    </a>
  </li>
);
