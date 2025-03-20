// TODO: 
// - Import the Link component from React Router
// - Make the button navigate the user back to the home page
import { Link } from 'react-router-dom';
import BotCard from './BotCard';

const GoHomeButton = () => {
  return (
<Link to = "/"> 
      <button className='ui button fluid'>Go Home</button>

    </Link>
  );
}


export default GoHomeButton;