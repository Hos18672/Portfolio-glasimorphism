
import { useState } from "react";
import "./switch.scss";

export const Switch = () => {
  const [active, setActive] = useState(false);
  function handle(){
    setActive(!active)
    const main = document.querySelector('.main')
    if(!active){
      main.classList.add('active');
     }else{
      main.classList.remove('active');
    }
  }
  return (
      <div class="switch">
        <input type="checkbox" name="toggle" onClick={handle} />
        <label for="toggle">
          <i class="bulb">
            <span class="bulb-center"></span>
          </i>
        </label>
      </div>
  );
};


