import React from 'react';
import img1 from "../../assets/experience/sevenhiils.png";
import img2 from "../../assets/experience/ibk.png";
import img3 from "../../assets/main/img3.png";
import img4 from "../../assets/main/img4.png";
import Description from "../../Components/Description/Description";
import DescriptionReverse from "../../Components/DescriptionReverse/DescriptionReverse";
import Slider from "../../Components/Slider/Slider";


const Layout = () => {
	return (
		<div>
			<Description
                img={img1}
                short_text='Проект киберспортивного турнира "7 холмов" реализованного в рамках '
                full_text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            />
			<DescriptionReverse
                img={img2}
                short_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                full_text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            />
            {/*<Slider/>*/}
            <Description
                img={img3}
                short_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                full_text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            />
            <DescriptionReverse
                img={img4}
                short_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                full_text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            />
		</div>
	);
};

export default Layout;
