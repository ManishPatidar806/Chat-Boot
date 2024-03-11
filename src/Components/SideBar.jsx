import React, { useContext, useState } from "react";
import "./SIdeBar.css"
import { assets } from './../assets/assets'
import { Context } from "../context/context";
export default function SideBar() {
    const [extended, setextended] = useState(false);
    const{onSent,prevPrompts,setrecentPrompt , newchat} = useContext(Context)

const loadprompt = async (prompt)=>{
    setrecentPrompt(prompt)
    
    await onSent(prompt)
}



    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setextended((pre => !pre))} className="menu" src={assets.menu_icon} alt="" />
                <div onClick={()=>newchat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return (
                       <div onClick={()=>loadprompt(item)} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p className="recent-para">{item.slice(0,18)}...</p>
                    </div>  
                    )
                })}
                   
                </div> : null}
            </div >
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p className="recent-para">Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p className="recent-para">Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p className="recent-para">Setting</p> : null}
                </div>
            </div>
        </div >
    );
}