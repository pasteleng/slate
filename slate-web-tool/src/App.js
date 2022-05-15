/*
  TODO - edit unit
  TODO - think about making true CRUD w/ database connection
         + potential legal ramifications of saving game & rules info
*/
import { v4 as uuid } from 'uuid';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import DataView from './DataView';
import NewUnitModal from './NewUnitModal';

const SAMPLE_OBJ = [
  {
    "name": "UNIT_NAME_ALPHA",
    "stats": "M:? WS:? BS:? S:? T:? W:? A:? Ld:? Sv:?",
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
    "stats": "M:? WS:? BS:? S:? T:? W:? A:? Ld:? Sv:?",
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
  const [show, setShow] = useState(false);
  const [newUnit, setNewUnit] = useState({});

  // Default(s)
  const DEFAULT_UNIT = {
    name:     "",
    stats:    "",
    psychic:  [],
    shooting: [],
    combat:   [],
    keywords: "",
    uuid: uuid()
  }

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

  // Add a newly created unit to the list
  const addUnitToList = () => {
    setSlateData( slateData => [...slateData, newUnit] );
    handleClose();
  };

  // remove a unit from the list
  const deleteUnit = (id) => {
    console.log(`deleting unit uuid: ${id}`);
    let filteredData = slateData.filter( (item) => {
      return (item.uuid !== id)
    });
    setSlateData(filteredData);
  };

  // new unit hooks editing
  const editNewUnitName     = (uName)  => { setNewUnit({ ...newUnit, name: uName }) };
  const editNewUnitStats    = (uStats) => { setNewUnit({ ...newUnit, stats: uStats }) };
  const editNewUnitPsychic  = (uPsych) => { setNewUnit({ ...newUnit, psychic: uPsych }) };
  const editNewUnitShooting = (uShoot) => { setNewUnit({ ...newUnit, shooting: uShoot }) };
  const editNewUnitCombat   = (uCombt) => { setNewUnit({ ...newUnit, combat: uCombt }) };
  const editNewUnitKeyWords = (uKyWrd) => { setNewUnit({ ...newUnit, keywords: uKyWrd }) };

  // JSX magic
  return (
    <div className="App">
      <Container className="sm">
        <Row>
          <h1>Magos</h1>
          <h2>Data Slate Builder</h2>
        </Row>
        <Row className="my-2">
          <Col sm={2}>
            <Row className="my-2">
              <Button variant="primary" onClick={ handleShow }>Add Unit</Button>
            </Row>
            <Row className="my-2">
              <Button variant="primary"
                href={`data:text/json;charset=utf-8,
                ${ encodeURIComponent(JSON.stringify(slateData)) }`}
                download="slatedata.json"
              >
                Export Slate Data
              </Button>
            </Row>
            <Row className="my-2">
              <Button variant="primary"
                href={`data:text/json;charset=utf-8,
                ${ encodeURIComponent(JSON.stringify(DEFAULT_UNIT)) }`}
                download="blank_datafile.json"
              >
                Export Blank Data File
              </Button>
            </Row>
            <Row className="my-2">
              <Button variant="primary"
                href={`data:text/json;charset=utf-8,
                ${ encodeURIComponent(JSON.stringify(SAMPLE_OBJ)) }`}
                download="sample_slatedata.json"
              >
                Export Sample Data
              </Button>
            </Row>
          </Col>
          <Col sm={4} className="mx-2">
            <DataView data={slateData} deleteUnit={deleteUnit} />
          </Col>
        </Row>
      </Container>

      <NewUnitModal
          show={show}
          handleClose={handleClose}
          newUnit={newUnit}
          editNewUnitName={editNewUnitName}
          editNewUnitStats={editNewUnitStats}
          editNewUnitPsychic={editNewUnitPsychic}
          editNewUnitShooting={editNewUnitShooting}
          editNewUnitCombat={editNewUnitCombat}
          editNewUnitKeyWords={editNewUnitKeyWords}
          addUnitToList={addUnitToList}
        />
    </div>
  );
}

export default App;
