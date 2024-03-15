import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppName from '../components/AppName';



function LandingPage() {
  const history = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() =>{
      history("/Home");
    }, 3000);  //that is at 3 seconds it should change.
    return () => clearInterval(intervalId);
  }, [history]);   //clearing the interval to make it to stop changing


  return (
    <div>
      <AppName text='SCISSOR' />
    </div>
  )
}

export default LandingPage
