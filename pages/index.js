import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import ProjectLink from "../components/ProjectLink";
import SocialItem from "../components/social-item";
import LayoutAimate from "../components/LayoutAimate";

function Home() {
  return (
    <LayoutAimate title="home">
      <div className="home">
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
            <img src="./images/avatar.jpg" alt="" />
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
              user="@abd_elhadi"
            />
            <SocialItem
              icon={<BsInstagram />}
              link="https://www.instagram.com/"
              user="@abd_elhadi"
            />
            <SocialItem
              icon={<BsFacebook />}
              link="https://www.facebook.com/"
              user="@abd_elhadi"
            />
            <SocialItem
              icon={<AiOutlineTwitter />}
              link="https://www.twitter.com/"
              user="@abd_elhadi"
            />
          </ul>
        </div>
        <div className="project-links">
          <ProjectLink
            img="./images/react.jpg"
            title="React JS"
            subTitle="Learn react js"
          />
          <ProjectLink
            img="./images/redux.jpg"
            title="Node JS"
            subTitle="Learn node js"
          />
        </div>
        <button className="portfolio-btn" style={{ marginBottom: "0px" }}>
          <a href="/posts" className="apple-font" target="_self">
            Popular posts <MdOutlineKeyboardArrowRight />
          </a>
        </button>
      </div>

      <style jsx>{`
        .home {
          width: 100%;
        }

        .apple-font {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 16px;
        }

        .title {
          width: 100%;
          text-align: center;
          margin: 24px 0;
          border-radius: 8px;
          padding: 12px;
        }

        .profile-container {
          display: flex;
          justify-content: space-between;
        }

        .skill-title {
          width: auto;
          display: inline;
        }

        .profile-avatar {
          display: inline;
        }

        .profile-avatar img {
          width: 100px;
          height: 100px;
          border-radius: 50px;
          border: white solid 2px;
        }

        .work-describe {
          margin-top: 10px;
        }

        .describe-text {
          text-align: justify;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 16px;
        }

        .social-links {
          margin-top: 25px;
        }

        .social-links ul {
          list-style-type: none;
        }



        .section-title {
          text-decoration: underline 4px rgb(82, 82, 82);
          text-underline-offset: 6px;
          font-family: "M PLUS Rounded 1c";
          font-weight: 700;
          font-size: 20px;
          margin-top: 12px;
          margin-bottom: 16px;
        }

        .portfolio-btn {
          margin: auto;
          height: 40px;
          width: 147px;
          border: none;
          border-radius: 5px;
          margin-top: 16px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portfolio-btn:hover {
          opacity: 0.9;
        }

        .portfolio-btn a {
          width: inherit;
          height: inherit;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bio-describe {
          margin-top: 20px;
          overflow-wrap: break-word;
        }

        .bio-item {
          padding-left: 54.4px;
          text-indent: -54.4px;
        }

        .bio-item-title {
          font-weight: bold;
          margin-right: 16px;
        }

        .i-love {
          margin-top: 25px;
        }

        .project-links {
          margin-top: 5px;
          margin-bottom: 5px;
          width: 100%;
          display: grid;
          grid-gap: 24px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        /* Media Quirites*/
        @media (max-width: 795px) {
          .profile-container {
            display: block;
          }

          .skill-title {
            width: 100%;
            display: block;
          }

          .profile-avatar {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .profile-avatar img {
            margin-top: 16px;
          }
        }

        @media (max-width: 480px) {
          .project-links {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
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