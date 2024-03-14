import "./Center.css"
import React, { useContext } from "react";
import { assets } from "./../assets/assets"
import { Context } from "../context/context";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
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
                <img  className="logo" src={assets.name_logo_icon} alt="" />
                <img className="user" src={assets.user_icon} alt="" />
            </div>

            <div className="Center-container">
                {!showResult?<>
                 <div className="greet">
                    <p ><span>Hello,Manish.</span></p>
                    <p>How can i help you today?</p>

                </div>

                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Create a PowerPoint Presentation on Evolution of Ai.</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Create a beautiful message for wishing birthday.</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Write a Programme to Find Largest elements in Array.</p>
                        <img src={assets.code_icon} alt="" />
                    </div></div>
                </>:
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <div>{recentPrompt}</div>
                    </div>
                    <div className="result-data">
                        <img src={assets.logo_icon} alt="" />
                        {loading?
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        : <Markdown remarkPlugins={[remarkGfm]}>{<p dangerouslySetInnerHTML={{__html:resultData}}></p>}</Markdown>
                        }
                    </div>
                </div>
                }
               
                
                <div className="main-bottom">
                    <form className="search-box" onSubmit={handleSubmit}>
                        <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div className="imagesection"> 
                            <img src={assets.mic_icon} alt="" />
                           {input? 
                           <p type="submit">
                            <img  src={assets.send_icon} alt="" />
                           </p>:null}
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