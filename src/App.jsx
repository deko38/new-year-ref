import classes from './modules/App.module.css'
import {useEffect, useRef, useState} from "react";



const App = () => {


    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);

    const user = useRef()
    const [enteredUser, setEnteredUser] = useState('')
    const userText = useRef()
    const [enteredUserText, setEnteredUserText] = useState('')


    const timer = useRef()
    const [countDown, setCountDown] = useState(5)
    const [countDownText, setCountDownText] = useState('')


    // AR AVTVIRTE AMIT ROM AR DACRASHULIYO SAITI

    // useEffect(() => {
    //     timer.current = setInterval(()=>{
    //         setCountDown(prev => prev -1)
    //     }, 1000)
    //     return()=> clearInterval(timer)
    // }, []);
    //
    //
    // useEffect(() => {
    //     timer.current = setInterval(()=>{
    //         setCountDownText("your wish will come true")
    //     }, 5000)
    //     return()=> clearInterval(timer)
    // }, []);






    const fullNameHandler= ()=>{
        setEnteredUser(user.current.value)
        setShowDiv3(!showDiv3)
        setEnteredUserText(userText.current.value)
        setShowDiv2(showDiv2)
    }



    return (
        <>


            <div>
                {showDiv1 ? (
                    <div id="div1">
                        <div className={classes['main-box']}>
                            <div className={classes['first-box']}>
                                <h1>MERRY CHRISTMAS!</h1>


                                <h2>Get Your Personalized countdown with a Text!</h2>
                                <h3>click below to make Your Christmas card !!!</h3>
                                <button className={classes['button-85']} onClick={() => setShowDiv1(false)}>Make a Card</button>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div id="div2">
                        <div className={classes['main-box']}>
                            <div className={classes['first-box1']}>
                                <h1>Personalized Christmas countdown!</h1>

                                <h2>Write down Your full Name</h2>
                                <input placeholder='Full Name' ref={user}/>
                                <h3>write down your christmas Card </h3>
                                <input placeholder='happy Christmas to...' ref={userText}/>
                                <br/>
                                <br/>

                                <button className={classes['button-85']} onClick={fullNameHandler} >Result</button>
                            </div>
                        </div>

                    </div>


                )}


                <div>
                    {showDiv3 ? (
                        <div className={classes['main-box']}>
                            <div className={classes['first-box1']}>
                                <h1> HO HO HO {enteredUser}</h1>

                                <h2>{enteredUserText}</h2>

                                <h3>you have 5 seconds to make a wish!</h3>

                                <button className={classes['button-85']} >
                                    Start Countdown
                                </button>

                                <br/>

                                <h4>{countDown}</h4>
                                <h5>{countDownText}</h5>
                            </div>
                        </div>
                    ) : ""}

                </div>


            </div>


        </>
    )
}

export default App

