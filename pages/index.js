import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import getAge from "../lib/age";
import ProjectLink from "../components/ProjectLink";
import LayoutAimate from "../components/LayoutAimate";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <LayoutAimate title="home">
      <div className="home">
        <div className="title apple-font">
          Hello, I am a new react developer based in Palestine!
        </div>
        <div className="profile-container">
          <div className="skill-title">
            <h1>Abd Elhadi</h1>
            <p className="apple-font">
              Programming ( ReactJS / NodeJS ) Developer
            </p>
          </div>
          <div className="profile-avatar">
            <Image
              style={{ borderRadius: "50px", border: "white solid 2px" }}
              width={100}
              height={100}
              src="/images/avatar.jpg"
              objectFit="cover"
              alt="avatar"
            />
          </div>
        </div>
        <div className="work-describe">
          <p className="section-title">About Me</p>
          <p className="describe-text">
            Hello ,I am Abd Elhadi and I am {getAge("2000-04-20")} years ago and
            I am an React JS developer, I have vary good experience with React
            and Javascript
          </p>
        </div>
        <button className="portfolio-btn">
          <Link href="/works">
            <a className="apple-font">
              My portfolio <span>&nbsp;&nbsp;</span>
              <MdOutlineKeyboardArrowRight />
            </a>
          </Link>
        </button>
        <div className="bio-describe">
          <p className="section-title">Bio</p>
          <BioItem
            title="2018"
            text="Start study programming and databases in University College of Applied Sciences."
          />
          <BioItem
            title="2020/4"
            text="Complete the diploma in programming and databases."
          />
          <BioItem
            title="2020/5"
            text="I work as Android Developer and end in 2020/11."
          />
          <BioItem
            title="2021/11"
            text="Start learning Html, CSS, Javascript, ES6, DOM, React JS, Hooks, Redux, MUI and more."
          />
        </div>
        <div className="skills">
          <p className="section-title">Skills</p>
          <div className="skills-list">
            <p className="skill-item">ReactJS</p>
            <p className="skill-item">NextJS</p>
            <p className="skill-item">Javascript ES6</p>
            <p className="skill-item">NextAuth</p>
            <p className="skill-item">Redux</p>
            <p className="skill-item">Redux toolkit</p>
            <p className="skill-item">Styled Components</p>
            <p className="skill-item">Tailwind CSS</p>
            <p className="skill-item">Material UI</p>
            <p className="skill-item">React Router DOM</p>
            <p className="skill-item">Responsive Website</p>
            <p className="skill-item">Support SEO</p>
            <p className="skill-item">React Helmet</p>
            <p className="skill-item">Knowledge UX</p>
            <p className="skill-item">HTML</p>
            <p className="skill-item">HTML5</p>
            <p className="skill-item">CSS</p>
            <p className="skill-item">CSS3</p>
          </div>
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
              link="https://www.github.com/abdelhadidevv"
              user="@abdelhadidevv"
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
            img="/images/e_commerce.png"
            title="E-commerce"
            subTitle="e-commerce mead with Next JS"
            link="https://ttech-store.vercel.app/"
          />
          <ProjectLink
            img="/images/landing_page.png"
            title="Landing page"
            subTitle="landing page with styled components"
            link="https://construction-qq.netlify.app/"
          />
        </div>
        <button className="portfolio-btn" style={{ marginBottom: "0px" }}>
          <Link href="/posts">
            <a className="apple-font">
              Popular posts <MdOutlineKeyboardArrowRight />
            </a>
          </Link>
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
        .skills {
          display: flex;
          flex-direction: column;
        }
        .skills-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .skill-item {
          border: none;
          border-radius: 20px;
          padding: 0px 4px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 14px;
          font-weight: 500;
          color:#319795;
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
  <>
    <div className="bio-item apple-font">
      <span className="bio-item-title">{title}</span>
      {text}
    </div>
    <style jsx>{`
      .apple-font {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 16px;
      }

      .bio-item {
        padding-left: 54.4px;
        text-indent: -54.4px;
      }

      .bio-item-title {
        font-weight: bold;
        margin-right: 16px;
      }
    `}</style>
  </>
);

const SocialItem = ({ icon, user, link }) => (
  <>
    <li className="social-item">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="social-item-btn apple-font">
          {icon}
          <span className="username apple-font">{user}</span>
        </button>
      </a>
    </li>
    <style jsx>{`
      .apple-font {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 16px;
      }

      .social-links ul {
        list-style-type: none;
      }

      .social-item a {
        text-decoration: none;
      }

      .social-item-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0px 16px;
        height: 40px;
        cursor: pointer;
        font-weight: 600;
        border-radius: 6px;
        border: none;
        background: none;
      }

      .username {
        outline: transparent solid 2px;
        outline-offset: 2px;
        text-underline-offset: 3px;
        margin-left: 9px;
      }
      .social-item-btn:hover .username {
        text-decoration: underline;
      }
    `}</style>
  </>
);
