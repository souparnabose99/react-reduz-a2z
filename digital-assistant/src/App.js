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
          <div className='columns'></div>
        </section>
      </div>
      <ProfileCard title='Alexa' handle='alexa@11' image={AlexaImage}/>
      <ProfileCard title='Cortana' handle='cortana@22' image={CortanaImage}/>
      <ProfileCard title='Siri' handle='siri@33' image={SiriImage}/>
      </div>
  )
}

export default App;