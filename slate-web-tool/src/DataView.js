import UnitDescriptionBlock from './UnitDescriptionBlock';

function DataView(props) {
  return (
    <div className="data-view">
      <h3>Slate Data:</h3>
      <div>
        {props.data.map((val, key) => (
          <div key={ key }>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataView;
