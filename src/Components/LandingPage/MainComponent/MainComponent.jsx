import React from 'react'
import "./style.css"
import Button from "../../Common/Button/Button"
import iphone from "../../../assets/iphone.png"
import iphone1 from "../../../assets/iphone1.png"
import tab from "../../../assets/tab.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion";


const MainComponent = () => {
    return (
        <div className='flex-info'>
            <div className="left-component">
                <motion.h1 className='track-crypto-heading' 
                    initial={{opacity:0, y:50}} 
                    animate={{opacity:1, y:0}} 
                    transition={{duration: 0.5}}
                    >Track Crypto
                </motion.h1>
                <motion.h1 className='real-time-heading'
                    initial={{opacity:0, y:50}} 
                    animate={{opacity:1, y:0}} 
                    transition={{duration: 0.5, delay:0.5}}
                    >Real Time.
                </motion.h1>
                <motion.p className='info-text' 
                    initial={{opacity:0, y:50}} 
                    animate={{opacity:1, y:0}} 
                    transition={{duration: 0.5, delay:1}}
                    >Track crypto through a public api in real time. Visit the dashboard to do so!
                </motion.p>

                <motion.div className='btn-flex'
                    initial={{opacity:0, x:50}} 
                    animate={{opacity:1, x:0}} 
                    transition={{duration: 0.5, delay:1.5}}
                    >
                    <Button text="Dashboard"></Button>
                    <Button text="Share" outlined={true}></Button>
                </motion.div>
            </div>

            <div className='phone-container'>
                <motion.img src={iphone} 
                    className='iphone'
                    initial={{y:-10}}
                    animate={{y:10}}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration:2,
                        repeat: Infinity,
                    }}
                />
                <img src={gradient} className='gradient'/>
                <motion.img src={iphone1} 
                    className="iphone1" 
                    initial={{x:-10}}
                    animate={{x:10}}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration:2,
                        repeat: Infinity,
                    }}
                />
                <motion.img src={tab} 
                    className='tab'
                    initial={{opacity:0, x:50}} 
                    animate={{opacity:1, x:0}} 
                    transition={{duration: 0.5, delay:1.5}}
                />
                
            </div>

        </div>

    )
}

export default MainComponent
