import React from "react";
import preloader from "../../assets/images/preloader.svg"

const Preloader: React.FC = () => {
    return (
        <div>
            <img style={{marginTop: "125px"}} src={preloader} alt={"preloader"}/>
        </div>
    )
}

export default Preloader