import UnitDescriptionBlock from './UnitDescriptionBlock';

import Button from 'react-bootstrap/Button';

function DataView(props) {
  return (
    <div className="data-view">
      <h3>Slate Data:</h3>
      <p className="text-muted">+++ Data shown as it will appear on device +++</p>
      <div>
        {props.data.map((val, key) => (
          <div key={ key } className="my-2">
            <p>{ val.name }</p>
            <p>{ val.stats }</p>
            <UnitDescriptionBlock
              groupname="Psychic Powers"
              groupdata={ val.psychic }
            />
            <UnitDescriptionBlock
              groupname="Ranged Weapons"
              groupdata={ val.shooting }
            />
            <UnitDescriptionBlock
              groupname="Combat Weapons"
              groupdata={ val.combat }
            />
            <p>{ val.keywords }</p>
            <Button variant="secondary" onClick={() => props.deleteUnit(val.uuid)}>Delete Unit</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataView;
