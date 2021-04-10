import { Button } from "semantic-ui-react";


  const ButtonSaveOrCancel= ({addEntry,resetEntry}) =>( <Button.Group >
    <Button onClick={()=> resetEntry()}>Cancel</Button>
    <Button.Or />
    <Button primary onClick={()=> addEntry()}>Ok</Button>
  </Button.Group>)

export default ButtonSaveOrCancel;