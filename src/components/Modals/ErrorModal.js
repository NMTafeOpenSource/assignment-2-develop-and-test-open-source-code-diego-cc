import React from 'react';
import {Button, Modal} from "react-bootstrap";

export const ErrorModal = props => {
  return (
	<Modal
	  {...props}
	  size="xl"
	  aria-labelledby="contained-modal-title-vcenter"
	  centered
	>
	  <Modal.Header closeButton>
		<Modal.Title id="contained-modal-title-vcenter">
		  Error
		</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
		<h4>{props.headermessage}</h4>
		<p>
		  {props.bodymessage}
		</p>
	  </Modal.Body>
	  <Modal.Footer>
		<Button variant="info" onClick={props.onHide}>Close</Button>
	  </Modal.Footer>
	</Modal>
  )
};