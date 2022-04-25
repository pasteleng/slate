import React, { useState, useEffect } from 'react';

import DataView from './DataView';
import UnitInput from './UnitInput';

const SAMPLE_OBJ = [
  {
    "name": "UNIT_NAME_ALPHA",
    "stats": "stats stats stats stats stats",
    "psychic": [
      {"name": "psychic_name_x", "desc": "description of ability x"},
      {"name": "psychic_name_y", "desc": "description of ability y"},
      {"name": "psychic_name_z", "desc": "description of ability z"},
    ],
    "shooting": [
      {"name": "weapon_profile_a", "desc": "description of profile a"},
      {"name": "weapon_profile_b", "desc": "description of profile b"},
    ],
    "combat": [
      {"name": "weapon_profile_n", "desc": "description of profile n"},
      {"name": "weapon_profile_m", "desc": "description of profile m"},
    ],
    "keywords": "keyword1, keyword2, keyword3, keyword4"
  },
  {
    "name": "UNIT_NAME_BETA",
    "stats": "Sstats stats stats stats stats",
    "psychic": [
      {"name": "psychic_name_xb", "desc": "description of ability xb"},
      {"name": "psychic_name_yb", "desc": "description of ability yb"},
      {"name": "psychic_name_zb", "desc": "description of ability zb"},
    ],
    "shooting": [
      {"name": "weapon_profile_a", "desc": "description of profile a2"},
      {"name": "weapon_profile_b", "desc": "description of profile b2"},
    ],
    "combat": [
      {"name": "weapon_profile_n", "desc": "description of profile nb"},
      {"name": "weapon_profile_m", "desc": "description of profile mb"},
    ],
    "keywords": "keyword1, keyword2, keyword3, keyword4"
  }
]


function App() {

  // Hooks setup
  const [slateData, setSlateData] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [newUnit, setNewUnit] = useState({});


  // Defaults
  const DEFAULT_UNIT = {
    name:     "",
    stats:    "",
    psychic:  [],
    shooting: [],
    combat:   [],
    keywords: ""
  }


  // React magic
  useEffect(() => {
    setSlateData(SAMPLE_OBJ);
  }, []);


  // Open new unit modal
  const handleShow = () => {
    setNewUnit(DEFAULT_UNIT);
    setShow(true);
  };


  // Close new unit modal
  const handleClose = () => {
    setShow(false);
    setNewUnit(DEFAULT_UNIT);
  };


  // new unit state modification
  const editNewUnitName     = (uName)  => { setNewUnit({ ...newUnit, name: uName }) };
  const editNewUnitStats    = (uStats) => { setNewUnit({ ...newUnit, stats: uStats }) };
  const editNewUnitPsychic  = (uPsych) => { setNewUnit({ ...newUnit, psychic: uPsych }) };
  const editNewUnitShooting = (uShoot) => { setNewUnit({ ...newUnit, shooting: uShoot }) };
  const editNewUnitCombat   = (uCombt) => { setNewUnit({ ...newUnit, combat: uCombt }) };
  const editNewUnitKeyWords = (uKyWrd) => { setNewUnit({ ...newUnit, keywords: uKyWrd }) };


  // JSX magic
  return (
    <div className="App">
        <DataView data={slateData} />
        <NewUnitModal
          setDisplayModal={setDisplayModal}
          handleClose={handleClose}
          newUnit={newUnit}
          editNewUnitName={editNewUnitName}
          editNewUnitStats={editNewUnitStats}
          editNewUnitPsychic={editNewUnitPsychic}
          editNewUnitShooting={editNewUnitShooting}
          editNewUnitCombat={editNewUnitCombat}
          editNewUnitKeyWords={editNewUnitKeyWords}
        />
    </div>
  );
}

export default App;
