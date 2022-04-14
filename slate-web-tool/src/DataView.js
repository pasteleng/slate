import UnitDescriptionBlock from './UnitDescriptionBlock';
import './DataView.css';


function DataView(props) {
  return (
    <div className="data-view">
      <div className="content-box-rounded">
        {props.data.map((val, key) => (
          <div key={ key } className="unit-container">
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
