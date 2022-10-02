import "./menu.scss";

export const Menu = () => {
    return (
        <div className="menu-container"> 

            <div className="profile-container">
                 <div className="profile">
                    <div className="profile-image" alt="Reza profile image"> </div>
                    <h1>Reza Hossaini</h1>

                 </div> 
                <div className="line"></div>
            </div>

            <div className="menu-list-conainer">
                <ul className="menu-list">
                    <li className="selected">About Me</li>
                    <li>Projects</li>
                    <li>Educations</li>
                    <li>Works</li>
                    <li className="">Skills</li>
                </ul>
                <div className="line"></div>
            </div>

            <div className="menu-bottom-container">
                <div className="contact-btn">Contact</div>
            </div>
        </div>
    )
};
