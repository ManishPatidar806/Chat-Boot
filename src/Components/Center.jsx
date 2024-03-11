import "./Center.css"
import React, { useContext } from "react";
import { assets } from "./../assets/assets"
import { Context } from "../context/context";
export default function Center() {

    const {
        onSent,
       recentPrompt,
       showResult,
        loading,
      resultData,  
       setinput,    
        input
          
    }=useContext(Context);


    const handleSubmit = (e) => {
        e.preventDefault();
        onSent();
    }




    return (
        <div className="Center">
            <div className="nav">
                <p>Chat-Bot</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="Center-container">
                {!showResult?<>
                 <div className="greet">
                    <p><span>Hello,Manish.</span></p>
                    <p>HOw can i help you today?</p>

                </div>

                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Explain Multi threading</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Explain why india is bigger than pakistan</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>have you watch Harry potter</p>
                        <img src={assets.code_icon} alt="" />
                    </div></div>
                </>:
                <div className="result">
                    <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
                }
               
                
                <div className="main-bottom">
                    <form className="search-box" onSubmit={handleSubmit}>
                        <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div> <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                           {input? 
                           <button type="submit">
                            <img  src={assets.send_icon} alt="" />
                           </button>:null}
                        </div>
                    </form>
                    <p className="bottom-info">
                        Chat-bot is work according to their store data
                    </p>
                </div>
            </div>
        </div>
    );
}