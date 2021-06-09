import React from "react";
import preloader from "../../assets/images/preloader.svg"

type PreloaderPropsType = {
    isFetching: boolean
}

const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader} alt={"preloader"}/> : null}
        </div>
    )
}

export default Preloader