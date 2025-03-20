// TODO:
// - import useNavigate from react router
// - Update the onClick handler such that clicking on a bot card will navigate the user to /robots/:id where :id is the id of the current bot
// - Do NOT use a <Link> component to accomplish this. Use the `useNavigate` hook instead.
import BotClassIcon from './BotClassIcon';
import { useNavigate } from 'react-router-dom';

const BotCard = ({ robot }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/robots/${robot.id}`);
    console.log(`take me to robot ${robot.id}`);
    
  }

  return (
    <div className="ui card" onClick={handleClick}>
      <div className="image">
        <img alt={robot.name} src={robot.avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {robot.name} <BotClassIcon className={robot.bot_class} />
        </div>
        <div className="meta">
          <small>{robot.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat" />
          {robot.health}
        </span>
        <span>
          <i className="icon lightning" />
          {robot.damage}
        </span>
        <span>
          <i className="icon shield" />
          {robot.armor}
        </span>
      </div>
    </div>
  );
};

export default BotCard;