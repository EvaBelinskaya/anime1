import React, { useState } from "react";
import Header from './header';
import { FAQ } from './FAQ';
import styles from './fqa.module.css';

export const Faq = () => {
    const [faqs, setfaqs] = useState([
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium asperiores cupiditate deserunt doloremque dolores error exercitationem labore laboriosam magnam nam nisi nulla officia provident qui recusandae tenetur veniam, vitae!",
            open: true
        },
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium asperiores cupiditate deserunt doloremque dolores error exercitationem labore laboriosam magnam nam nisi nulla officia provident qui recusandae tenetur veniam, vitae!",
            open: false
        },
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium asperiores cupiditate deserunt doloremque dolores error exercitationem labore laboriosam magnam nam nisi nulla officia provident qui recusandae tenetur veniam, vitae!",
            open: false
        },
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium asperiores cupiditate deserunt doloremque dolores error exercitationem labore laboriosam magnam nam nisi nulla officia provident qui recusandae tenetur veniam, vitae!",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        let previousArray = [...faqs];
        previousArray[index].open = !previousArray[index].open;
        setfaqs(previousArray)
    };

    return (
        <div>
            <div className={styles.logoHolder}>
                <img src="./logo.png" alt="AMiE" />
            </div>
            <Header />
            <div className={styles.faqs} >
                {faqs.map((faq, i) => (
                    <div className={styles.faq}>
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                    </div>
                ))}
            </div>
        </div>
    )
};

