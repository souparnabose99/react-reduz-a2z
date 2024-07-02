import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

const App = () => {
  return(
    <div>
      <div>Personal Digital Assistant</div>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title='Alexa' handle='alexa@11' image={AlexaImage}/>
            </div>
            <div className='column is-4'>
              <ProfileCard title='Cortana' handle='cortana@22' image={CortanaImage}/>
            </div>
            <div className='column is-4'>
              <ProfileCard title='Siri' handle='siri@33' image={SiriImage}/>
            </div>
          </div>
        </section>
      </div>
      
      </div>
  )
}

export default App;