import React, { useState, useEffect } from 'react';

import DataView from './DataView';

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

  const [slateData, setSlateData] = useState([]);

  useEffect(() => {
    setSlateData(SAMPLE_OBJ);
  }, []);

  return (
    <div className="App">
        <DataView data={slateData} />
    </div>
  );
}

export default App;
