import react from "react";


const Hero = () => {
    return (
        <div className="container bg-light" style={{height:350}}>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Pricing</h1>
                    <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. 
                    It’s built with default Bootstrap components and utilities with little customization.
                    </p>
            </div>
                <button className="btn btn-primary" onClick={handleClick}>
                You know you wanna click me ;)
                </button>
        </div>
    )
}

const handleClick = () => {
    alert("I'm clicked!")
}

    export default Hero
