import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'

export default function Main(){

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="Icon not found" />
      </div>
      <div className='main-container'>

        {!showResult ? 
          <>
            <div className='greet'>
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className='cards'>
              <div className='card'>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Icon not found" />
              </div>
              <div className='card'>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="Icon not found" />
              </div>
              <div className='card'>
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Icon not found" />
              </div>
              <div className='card'>
                <p>Improve the readabilit of the following code</p>
                <img src={assets.code_icon} alt="Icon not found" />
              </div>
            </div>
          </> :
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="Icon not found" />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="Icon not found" />
              {
                loading ? 
                  <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div> :
                  <p dangerouslySetInnerHTML={{__html: resultData}}></p>
              }
              
            </div>
          </div>
        }

        <div className='main-bottom'>
          <div className='search-box'>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="Icon not found" />
              <img src={assets.mic_icon} alt="Icon not found" />
              {
                input ? 
                  <img onClick={() => onSent()} src={assets.send_icon} alt="Icon not found" /> :
                  null
              }
                
            </div>
          </div>
          <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps</p>
        </div>

      </div>
    </div>
  )
}