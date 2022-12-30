import React from "react"
import ReactDOM  from "react-dom"
import Header from "./Header"
function Processing(){
    return (
    <div>
        <h1>Why I Have Decided To Learn React</h1>
        <ul className="list-items2">
            <li>Its easy to learn</li>
            <li>Its decidabale</li>
            <li>It is iteresting</li>
        </ul>
    </div>
    )
}
function Footer(){
    return (
    <footer>
        <div className="foot">
            @Copyright claimed by aakarsh sharma
        </div>
    </footer>
    )
}
function Page(){
    return(
        <div className="full">
<Header />
<Processing />
<Footer />
</div>
    )
}
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)