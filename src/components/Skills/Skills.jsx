import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';

import PropTypes from 'prop-types';

function Skills(props){
  return (
    <div>
      <h5>My skills as a programmer</h5>
      <Collapsible accordion>
        {props.skills.map((skill, index) => 
          <CollapsibleItem key={index} header={skill.name}>
            {skill.description}
          </CollapsibleItem>
        )}
      </Collapsible>

    </div>
  );
}
Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};


export default Skills;