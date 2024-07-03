import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

const App = () => {
  return(
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>
            Personal Digital Assistant
          </p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard 
              title='Alexa' 
              handle='alexa@11' 
              image={AlexaImage}
              description='Alexa is made by Amazon'/>
            </div>
            <div className='column is-4'>
              <ProfileCard 
              title='Cortana' 
              handle='cortana@22' 
              image={CortanaImage}
              description='Cortana is made by Microsoft'/>
            </div>
            <div className='column is-4'>
              <ProfileCard 
              title='Siri' 
              handle='siri@33' 
              image={SiriImage}
              description='Siri is made by Apple'/>
            </div>
          </div>
        </section>
      </div>
      
      </div>
  )
}

export default App;