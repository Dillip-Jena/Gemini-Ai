import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import { Context } from '../../context/Context';

export default function Sidebar(){

  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className='sidebar'>

      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="Image not found" />
        <div onClick={() => newChat()} className='new-chat'>
          <img src={assets.plus_icon} alt="Icon not found" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            {
              prevPrompts.map((item, index) => {
                return (
                  <div onClick={() => loadPrompt(item)} key={index} className='recent-entry'>
                    <img src={assets.message_icon} alt="Icon not found" />
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                )
              })
            }
            
          </div> : null
        }
      </div>

      <div className="bottom">
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon} alt="Icon not found" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon} alt="Icon not found" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon} alt="Icon not found" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}