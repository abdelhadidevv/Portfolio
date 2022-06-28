import socialItem from "../styles/SocialItem.module.css";

const SocialItem = ({ icon, user, link }) => (
  <li className={socialItem.socialItem}>
    <a className={socialItem.link} href={link} target="_blank" rel="noreferrer">
      <button className={(socialItem.socialItemBtn, socialItem.appleFont)}>
        {icon}
        <span className={(socialItem.userName, socialItem.appleFont)}>
          {user}
        </span>
      </button>
    </a>
  </li>
);

export default SocialItem;
