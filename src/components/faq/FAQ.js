import React from "react";
import styles from "./fqa.module.css";

export const FAQ = ({faq,index, toggleFAQ}) => {
     return(
        <div
            className={"faq"+(faq .open ? 'open' : '')}
            key={index}
            onClick={()=> toggleFAQ(index) }
        >
            <div className={styles.faqQuestion}>
                {faq.question}
            </div>
            <div className={styles.faqAnswer} >
                {faq.answer}
            </div>
        </div>
 )
};
