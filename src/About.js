import react from "react";
import Navbar from './Navbar';

function About(){
    
    return(
        <div className="header">
            <Navbar/>
            <main id= "contributors">
                <div className="sql _writers">DATA SCIENCE CONTRIBUTORS</div>
                    <img src = "insert image url"/>
                    <h3>LOUIS C</h3>
                    <p>Louis's biggest loves in life are superheroes and sql queries</p>
                <div className="coders"> CONTRIBUTING DEVELOPERS</div>
                    <img src = "insert image url"/>
                    <h3>Tiffany Tam</h3>
                    <p>Tiffany's biggest loves in life are her cats and coding</p>
            </main>
        </div>
    )
}
export default About;