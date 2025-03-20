// This component is shown at /robots/${id}
// TODO: 
// 1. pull the id value from the URL
// 2. make state for fetching the robot (and the error)
// 3. use the getRobotById adapter in useEffect, re-fetching each time the id changes
// 4. Update the rendered component to include the fetched robot's data
//     - img alt
//     - img src
//     - name
//     - catchphrase
//     - robot class ("Assault", "Defender", or "Support")
//     - robot class Icon
//     - health
//     - damage
//     - armor
// 5. if an error occurs, render <CouldNotLoadData /> instead
// 6. if no robot is found, render <NotFoundPage /> instead
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import CouldNotLoadData from './CouldNotLoadData';
import BotClassIcon from './BotClassIcon';
import { getRobotById } from '../adapters/robotAdapters';


const BotSpecs = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
  //   const fetchRobot = async () => {
  //     try {
  //       const data = await getRobotById(id);
  //       if (!data) {
  //         setRobot(null);
  //       } else {
  //         setRobot(data);
  //       }
  //     } catch (error) {
  //       setError();
  //     }
  //   };

  //   fetchRobot();
  // }, [id]);
  const fetchRobot = async (id) => {
    const [data, error] = await getRobotById(id);
    if (data) setRobot(data);
    if (error) setError(error);
}
fetchRobot(id);
}, [id]);

  if (error) {
    return <CouldNotLoadData />;
  }

  if (!robot) {
    return <NotFoundPage />;
  }

  return (
    <div className="four wide column">
      <img src={robot.avatar_url} alt={robot.name} />
      <h2>{robot.name}</h2>
      <p>
        <strong>Catchphrase: </strong>
        {robot.catchphrase}
      </p>
      <strong>
        {robot.class} <BotClassIcon className={robot.class} />
      </strong>
      <br />
      <div className="ui segment">
        <div className="ui three column centered grid">
          <div className="row">
            <div className="column">
              <i className="icon large circular red heartbeat" />
              <strong>{robot.health}</strong>
            </div>
            <div className="column">
              <i className="icon large circular yellow lightning" />
              <strong>{robot.damage}</strong>
            </div>
            <div className="column">
              <i className="icon large circular blue shield" />
              <strong>{robot.armor}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;

  