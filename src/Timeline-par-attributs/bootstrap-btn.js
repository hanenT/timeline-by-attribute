import React from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './bootstrap-btn.css';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel}Participer </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Formulaire de participation</ModalHeader>
          <ModalBody>
          <Form>
      <FormGroup>
          <Label >Nom</Label>
          <Input type="text" name="nom"  placeholder="Nom" />
        </FormGroup>
        <FormGroup>
          <Label >Prénom</Label>
          <Input type="text" name="prenom"  placeholder="Prénom" />
        </FormGroup>
        <FormGroup>
          <Label >Téléphone</Label>
          <Input type="number" name="telephone"  placeholder="Téléphone" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">E-mail</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Please enter your password" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Profession</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Etudiant</option>
            <option>Professionnel</option>
            <option>Enseignant</option>
            <option>Autres</option>
            
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Etablissement</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>ESSTED</option>
            <option>ISBAT</option>
            <option>ASAMM</option>
            <option>Autres</option>
           
          </Input>
        </FormGroup>
        <Button>Inscription</Button>
      </Form>
            <br />
            <Button color="success" onClick={this.toggleNested}>Submit</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>   </ModalHeader>
              <ModalBody>Veuillez vérifier votre adresse mail pour confirmer votre participation</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default ModalExample;