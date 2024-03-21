import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppName from '../components/AppName';



function LandingPage() {
  const history = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() =>{
      history("/Home");
    }, 3000);
    return () => clearInterval(intervalId);
  }, [history]);   


  return (
    <div>
      <AppName text='SCISSOR' />
    </div>
  )
}

export default LandingPage
