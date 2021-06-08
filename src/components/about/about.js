import React from 'react';
import styles from './about.module.scss';
import aboutImage1 from '../../resources/about_image1.jpg';
import artboardOne from '../../resources/Artboard1leaf1.png';
import artboardTwo from '../../resources/Artboard1leaf2.png';
import artboardFree from '../../resources/Artboard1leaf3.png';
import artboardFour from '../../resources/Artboard1leaf4.png';
import artboardFive from '../../resources/Artboard1leaf5.png';
import artboardSix from '../../resources/Artboard1leaf6.png';
import artboardSeven from '../../resources/Artboard1leaf7.png';
import artboardEight from '../../resources/Artboard1leaf8.png';
import artboardNine from '../../resources/Artboard1leaf9.png';
import artboardTen from '../../resources/Artboard1leaf10.png';
import artboard21 from '../../resources/Artboard1leaf21.png';
import artboard91 from '../../resources/Artboard1leaf91.png';
import artboard67 from '../../resources/Artboard67pingppongcharacters.png';
import artboard68 from '../../resources/Artboard68pingppongcharacters.png';
import artboard69 from '../../resources/Artboard69pingppongcharacters.png';
import artboard78 from '../../resources/Artboard78pingppongcharacters.png';
import artboard63 from '../../resources/artboard631.jpeg';
import artboard671 from '../../resources/Artboard671pingppongcharacters.png';
import Header from './header'

export const About = () =>
{

    return (
    <div className={styles.wrapper}>
        <section className={styles.first_screen}>
            <div className={styles.title}>
                Why mindfulness in enducation?
            </div>

            <div className={styles.left}>
                <p>Mindfulness is the ability to be aware of
                what is happening in the present
                moment,without any judgement. It is a
                basic human ability that everyone has,
                that we can cultivate and train by prac
                tice. During mindfulness exercises,we
                are invited to pay attention to thoughts,
                sounds,smell,observations,emotions,
                parts of the body or the sensations of
                breathing, and to bring our attention
                back to the object of focus whenever the
                mind starts to wander. Another form of
                exercise is not using a specific focus yet
                training to stay aware of where the attention
                moves to. A third group of exercises
                are often called 'informal exercises':
                we train ourselves by paying more
                attention to specific actions, situations
                and interactions in our daily lives. For
                example, we drink tea, brush our hair, or
                walk to the next room with our full
                awareness.</p>

                <p>With guidance and training, mindfulness
                can develop into a way of living that
                brings greater focus and effectiveness as
                well as kindness and caring in everything
                we do.</p>

                <p>Childhood is an important formative and
                developmental stage that lays the foundation
                for well-being and mental health
                in later years and adulthood. The
                number of school-based programmes
                that aim to promote well-being and
                mindfulness, support emotional and
                social learning and prevent mental
                health problems in adulthood,is growing.</p>
            </div>
            <div className={styles.right}>
                <img src={artboard63} />
                <img src={aboutImage1} />
            </div>
        </section>
    </div>
    )
};