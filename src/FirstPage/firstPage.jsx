import React from "react"
import "./first.Page.css"
import { HomePage } from "./homePage"
import { AboutPage } from "./aboutPage"
import { WorkPage } from "./workPage"
import { ContactPage } from "./contactPage"

export function FirstPage() {
    return (
        <div className="container">
            <div className="background">
                <h1>
                    My Portofolio
                </h1>
            </div>
            <div className="slide">
                < HomePage />
                < AboutPage />
                < WorkPage />
                < ContactPage />
            </div>
        </div>
    )
}