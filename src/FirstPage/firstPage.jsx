import React from "react"
import "./first.Page.css"

export function FirstPage () {
    return (
        <div className="container">
            <div className="background">
            <h1>
            My Portofolio
            </h1>
            </div>
            <div className="slide">
                <div className="input">
                    <h2>
                        HOME
                    </h2>
                </div>
                <div className="input">
                    <h2>
                        ABOUT
                    </h2>
                </div>
                <div className="input">
                    <h2>
                        WORK
                    </h2>
                </div>
                <div className="input">
                    <h2>
                        CONTACT
                    </h2>
                </div>
            </div>
        </div>
    )
}