import React from "react"
import styles from "./styles.module.css"

const Quote = require('inspirational-quotes');


function TheLeft(){
    return(
        <>
        <div>
            <h1 className ={styles.headings}>"<p>{Quote.getRandomQuote()}</p>"</h1>
        </div>
        </>
    )
}
export default TheLeft;

