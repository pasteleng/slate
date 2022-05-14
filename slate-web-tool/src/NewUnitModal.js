/*
  TODO - Fix new line bugs and update textToObjectArray because it is wack
*/
import { React } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewUnitModal = (props) => {
	
	const {
		show,
		handleClose,
		editNewUnitName,
		editNewUnitStats,
		editNewUnitPsychic,
		editNewUnitShooting,
		editNewUnitCombat,
		editNewUnitKeyWords,
		addUnitToList
	} = props;

	// Get the user input in textareas to the expected format
	const textToObjectArray = (val) => {
		let attrObj = [];
		let arrayByLine = val.split(/\r?\n/);

		arrayByLine.forEach((line) => {
			if (line.includes(":")) {
				let splitLine = line.split(":");
				let lineObj = { 'name': [splitLine[0]], 'desc': splitLine[1].trim() };
				attrObj.push(lineObj);
			}
		});

		return attrObj;
	};

	return (
		<Modal show={ show } onHide={ handleClose }>
			<Modal.Header>
				<Modal.Title>Add New Unit</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="form-unit-name" id="unitname">
						<Form.Label>Unit Name</Form.Label>
						<Form.Control 
							placeholder="++ Unit Name ++"
							onChange={ (e) => (editNewUnitName(e.target.value)) }
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="form-unit-stats">
						<Form.Label>Unit Stats</Form.Label>
						<Form.Control 
							placeholder="++ Unit Stats ++"
							onChange={ (e) => (editNewUnitStats(e.target.value)) }
						/>
						<Form.Text className="text-muted">
							M:? WS:? BS:? S:? T:? W:? A:? Ld:? Sv:?
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="form-unit-psychic">
						<Form.Label>Psychic Powers</Form.Label>
						<Form.Control
							as="textarea"
							rows={5}
							placeholder="power: power description&#10;power2: power2 description&#10;etc..."
							onChange={ (e) => (editNewUnitPsychic(textToObjectArray(e.target.value))) }
						/>
						<Form.Text className="text-muted">
							One power per line
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="form-unit-shooting">
						<Form.Label>Shooting Profiles</Form.Label>
						<Form.Control
							as="textarea"
							rows={5}
							placeholder="weapon1: weapon1 stats&#10;weapon2: weapon2 stats&#10;etc..."
							onChange={ (e) => (editNewUnitShooting(textToObjectArray(e.target.value))) }
						/>
						<Form.Text className="text-muted">
							One weapon profile per line
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="form-unit-combat">
						<Form.Label>Melee Profiles</Form.Label>
						<Form.Control
							as="textarea"
							rows={5}
							placeholder="weapon1: weapon1 stats&#10;weapon2: weapon2 stats&#10;etc..."
							onChange={ (e) => (editNewUnitCombat(textToObjectArray(e.target.value))) }
						/>
						<Form.Text className="text-muted">
							One weapon profile per line
						</Form.Text>
					</Form.Group>
				</Form>
				<Form.Group className="mb-3" controlId="form-unit-keywords">
						<Form.Label>Unit Keywords</Form.Label>
						<Form.Control
							placeholder="++ Unit Keywords ++"
							onChange={ (e) => (editNewUnitKeyWords(e.target.value)) }
						/>
					</Form.Group>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={ handleClose }>Cancel</Button>
				<Button variant="primary" onClick={ addUnitToList }>Save Unit</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default NewUnitModal;