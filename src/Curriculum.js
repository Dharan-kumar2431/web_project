import './curriculum.css';
import { Link } from "react-router-dom";
import {Image} from 'react-bootstrap';
import backbutton1 from './images/backbutton1.png';
import cirriculum1 from './images/cirriculum1.png';
import cirriculum2 from './images/cirriculum2.png';
import cirriculum3 from './images/cirriculum3.png';
import cirriculum4 from './images/cirriculum4.png';
import cirriculum5 from './images/cirriculum5.png';





function Curriculum() {
    return (
        <div>
            <Link to="/"><Image className="backbutton" src={backbutton1} alt="backbutton" /></Link>
            <h2 className="chead">Industry Oriented Curriculum</h2>
            <h5 className="csubtopics m-4">INTRODUCTION</h5>
            <Image className="cimg" src={cirriculum1} alt="" />
            <p className="ptext">Data Science Introduction Life Cycle of Data Science Agile Methodology in Data Science</p>
            <h5 className="csubtopics m-4">BASICS OF STATISTICS</h5>
            <Image className="cimg" src={cirriculum2} alt="" />
            <p className="ptext">Exploratory Data Analysis Normal Distribution Skewness & Kurtosis 5 Point Summary Analysis
            </p>
            <h5 className="csubtopics m-4">DATA PROCESSING</h5>
            <Image className="cimg" src={cirriculum3} alt="" />
            <p className="ptext">Exploratory Data Analysis Normal Distribution Skewness & Kurtosis 5 Point Summary Analysis
            </p>
            <h5 className="csubtopics m-4">BRIDGE COURSE</h5>
            <Image className="cimg" src={cirriculum4} alt="" />
            <p className="ptext">PIP, ANACONDA, JUPYTER CLASSES & FUNCTIONS STRINGS, ARRAYS, LISTS Dictionaries, Tuples , Dataframes
Pandas & Numpy Practicals Exception Handling Loops & Decision Making File Handling & Directories
            </p>
            <h5 className="csubtopics m-4">FEATURE ENGINEERING</h5>
            <Image className="cimg" src={cirriculum5}  alt=""/>
            <p className="ptext">Feature Creation Feature Selection Correlation Information Gain GINI Index
Chi Square  LASSO RFE Feature Reduction Principal Component Analysis Singular Vector Decomposition 
            </p>

        </div>
    );
}

export default Curriculum;