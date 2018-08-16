import Reactt, { PropTypes } from 'react';
import Lane from '.Lane.js';

const Lane = ({ lanes }) => {
  return (
    <div className="lanes">
      {lanes.map(lane =>
        <Lane className="lane" key={lane.id} lane={lane} />
      )}
    </div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array
};

export default Lanes;