import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

class CreateChannelModal extends React{
  constructor(props){
    super(props);
  }

  render() {
    return (
    <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}


export default CreateChannelModal;
