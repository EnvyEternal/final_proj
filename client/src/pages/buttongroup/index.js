import React, {Component, useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './Buttongroup.module.sass';

const Buttongroup = () => {
    const [state, setState] = useState({1: 'No', 2: 'No', 3: 'No'});
    const handleClick = (e) => {
        if(state[e.target.id] === 'Yes') {
            setState({...state, [e.target.id]: 'No'})
            document.getElementById(e.target.id).className = styles.element
        }
        else{
            setState({...state, [e.target.id]: 'Yes'})
            document.getElementById(e.target.id).className = styles.active
        }
    }
    return (
        <>
        <Header/>
            <div className={styles.container}>
                <div onClick={handleClick} id='1' className={styles.element}>
                    <div className={styles.statecenter}>
                        <p className={styles.state}>{state[1]}</p>
                    </div>
                    <div onClick={handleClick} id='1' className={styles.elementInfo}>The domain should exactly match the name</div>
                </div>
                <div onClick={handleClick} id='2' className={styles.element}>
                    <div className={styles.statecenter}>
                        <p className={styles.state}>{state[2]}</p>
                    </div>
                    <div onClick={handleClick} id='2' className={styles.elementInfo}>But minor variables are allowed (Recommended)</div>
                </div>
                <div onClick={handleClick} id='3' className={styles.element}>
                    <div className={styles.statecenter}>
                        <p className={styles.state}>{state[3]}</p>
                    </div>
                    <div onClick={handleClick} id='3' className={styles.elementInfo}>I am only looking for a name. Not a domain</div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Buttongroup;