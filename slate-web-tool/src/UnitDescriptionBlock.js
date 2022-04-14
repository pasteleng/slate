import React from 'react';

const UnitDescToList = (props) => {
    const groupdata = props.groupdata.map((val, key) => {
        return (
            <li key={key}>{ val.name }: { val.desc }</li>
        );
    })

    return <ul>{ groupdata }</ul>
};

const UnitDescriptionBlock = (props) => {
  const { groupname, groupdata } = props;

      return (
          <div>
              <p>{ groupname }</p>
              <UnitDescToList groupdata={ groupdata } />
          </div>
      );
};

export default UnitDescriptionBlock;
