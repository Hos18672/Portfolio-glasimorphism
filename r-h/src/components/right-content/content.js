import "./content.scss";
import { Switch } from "./switch/switch";
import { AboutMe } from "./aboutMe/aboutMe";

export const Content = () => {
  return (
    <div className="right-menu-container">
      <div className="top-container">
      <Switch/>
      </div>
      <div className="content-container">
        <AboutMe/>
      </div>
    </div>
  );
};
