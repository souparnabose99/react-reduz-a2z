import ProfileCard from "./ProfileCard";

const App = () => {
  return(
    <div>
      <div>Personal Digital Assistant</div>
      <ProfileCard title='Alexa' handle='alexa@11'/>
      <ProfileCard title='Cortana' handle='cortana@22'/>
      <ProfileCard title='Siri' handle='siri@33'/>
      </div>
  )
}

export default App;