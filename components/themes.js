import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f0e7db",
  mainText: "#1a202c",
  btnMode: "#805ad5",
  modeIcon: "#fff",
  navBackground: "#ffffff40",
  menuIcon: "#1a202c",
  menuBorder: "#e2e8f0",
  dropDownMenu: "#fff",
  homeTitleBg: "#ffffff5c",
  homeTitleColor: "#1a202c",
  mainButton: "#319795",
  mainButtonHover: "#2C7A7B",
  socialUser: "#319795",
  socialButtonHover: "#E6FFFA",
  footerColor: "#1a202c",
};

export const darkTheme = {
  body: "#202023",
  mainText: "#EDEDED",
  btnMode: "#FBD38D",
  modeIcon: "#000",
  navBackground: "#20202380",
  menuIcon: "#ededed",
  menuBorder: "#ffffff29",
  dropDownMenu: "#2D3748",
  homeTitleBg: "#ffffff14",
  homeTitleColor: "#ffffffeb",
  mainButton: "#81e6d9",
  mainButtonHover: "#4fd1c5",
  socialUser: "#81E6D9",
  socialButtonHover: "#1D4044",
  footerColor: "#ffffffeb",
};

export const GlobalStyles = createGlobalStyle`
  *{
    color: ${(props) => props.theme.mainText};
  }
	.app {
    background: ${(props) => props.theme.body};
	}
  .dark-mode{
    background: ${(props) => props.theme.btnMode};
  }
  .header{
    background: ${(props) => props.theme.navBackground};
  }
  .dark-mode path {
    color:  ${(props) => props.theme.modeIcon};
  }
  .menu-btn{
    border-color: ${(props) => props.theme.menuBorder};
  }
  .menu-icon{
    color:  ${(props) => props.theme.menuIcon};
  }
  .dropdown-menu{
    background: ${(props) => props.theme.dropDownMenu};
    border-color: ${(props) => props.theme.menuBorder};
  }
  .title{
    background: ${(props) => props.theme.homeTitleBg};
    color:  ${(props) => props.theme.homeTitleColor};
  }
  .portfolio-btn{
    background: ${(props) => props.theme.mainButton};
  }
  .portfolio-btn:hover {
    background: ${(props) => props.theme.mainButtonHover};
  }
  .portfolio-btn a{
    color:  ${(props) => props.theme.modeIcon};
  }
  .portfolio-btn svg{
    fill:  ${(props) => props.theme.modeIcon};
  }
  .social-item svg{
    fill:  ${(props) => props.theme.socialUser};
  }
  .username{
    color:  ${(props) => props.theme.socialUser};
  }
  .social-item-btn:hover{
    background:  ${(props) => props.theme.socialButtonHover};
  }
  .footer p {
    color:  ${(props) => props.theme.footerColor};
  }
  .divider{
    border-color: ${(props) => props.theme.menuBorder};
  }
  .craftz{
    color:  ${(props) => props.theme.socialUser};
  }
  .craftz:hover{
    background:  ${(props) => props.theme.socialButtonHover};
  }
  .skill-item{
    background:  ${(props) => props.theme.socialButtonHover};

  }
`;
