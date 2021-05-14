import React from 'react';
import styles from "./fqa.module.css";
//верстка карточки вопроса и ответа

function FaqCard(props) {
    const { question } = props;

    const toggleFAQ = index => {
        let previousArray = [...question];
        previousArray[index].open = !previousArray[index].open;
        setquestion(previousArray)
    };

    const toggleClass = question.open ? styles.faqOpen : styles.faq;

        return (

            <div
                className={toggleClass}
                key={index}
                onClick={()=> toggleFAQ(index) }
            >

                <div className={styles.questionContainer}>
                    <div className={styles.imgContainerQuestion}>
                    </div>
                    <div className={styles.faqQuestion}>
                        {question.question}
                    </div>
                </div>

                <div className={styles.answerContainer}>
                    <div className={styles.imgContainerAnswer}>

                    </div>
                    <div className={styles.faqAnswer} >
                        {question.answer}
                    </div>
                </div>
            </div>
        )
    };


    export default FaqCard;