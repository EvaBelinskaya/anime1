/*import React from "react";
import styles from "./fqa.module.css";

export const FAQ = ({question,index, toggleFAQ}) => {

    const toggleClass = question.open ? styles.faqOpen : styles.faq;
     return (

        <div
            className={toggleClass}
            key={index}
            onClick={()=> toggleFAQ(index) }
        >


        <div className={styles.questionContainer}>
            <div className={styles.imgContainerQuestion}>
           <div className={styles.questionImg}>
             </div>
            </div>
            <div className={styles.faqQuestion}>
                {question.question}
            </div>
        </div>

<div className={styles.answerContainer}>
    <div className={styles.imgContainerAnswer}>
        <div className={styles.answerImg}>
    </div>
    </div>
            <div className={styles.faqAnswer} >
                {question.answer}
            </div>
</div>
        </div>
 )
};*/