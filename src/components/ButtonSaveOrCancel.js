import { Button } from "semantic-ui-react";


  const ButtonSaveOrCancel= () =>( <Button.Group >
    <Button>Cancel</Button>
    <Button.Or />
    <Button primary>Ok</Button>
  </Button.Group>)

export default ButtonSaveOrCancel;