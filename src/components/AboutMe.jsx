import '../css/AboutMe.css';
import "animate.css";
import { useState } from 'react';
import TrackVisibility from "react-on-screen";

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('Experience');

    function opentab(event, tabname) {
        setActiveTab(tabname);
    }
        
    
    return ( 
        <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="images/user.png" alt="" />
                </div>
                <div class="about-col-2">
                <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                    <h1 class="subtitle">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magnam a quos, dolores animi ullam nam soluta autem odit consequatur ipsa doloremque, magni omnis quisquam commodi, ducimus voluptas eum similique.</p>
                    </div>}
                    </TrackVisibility>
                    <div class="tab-titles">
                        <p className={activeTab === "Experience" ? "tab-links active-link" : "tab-links"} onClick={(event) => opentab(event, "Experience")}>Experience</p>
                        <p className={activeTab === "Education" ? "tab-links active-link" : "tab-links"} onClick={(event) => opentab(event, "Education")}>Education</p>
                    </div>
                    <div className={activeTab === "Experience" ? "tab-contents active-tab" : "tab-contents"}>
                        <ul>
                            <li><span>2021 - Current</span><br/>UX/UI Design Training at ET Institute</li>
                            <li><span>2019 - 2021</span><br/>UI/UX Design Exec at Coin Digital Ltd.</li>
                            <li><span>2017 - 2019</span><br/>Team Lead at StarApp LLC.</li>
                        </ul>
                    </div>
                    <div className={activeTab === "Education" ? "tab-contents active-tab" : "tab-contents"}> 
                        <ul>
                            <li><span>2024</span><br/>B.S. Data Science from UC San Diego</li>
                        </ul>
                    </div>
                    {/* <div class="tab-contents active-tab" id="experience">
                        <ul>
                            <li><span>2021 - Current</span><br/>UX/UI Design Training at ET Institute</li>
                            <li><span>2019 - 2021</span><br/>UI/UX Design Exec at Coin Digital Ltd.</li>
                            <li><span>2017 - 2019</span><br/>Team Lead at StarApp LLC.</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2024</span><br/>B.S. Data Science from UC San Diego</li>
                           
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
     );
}
 