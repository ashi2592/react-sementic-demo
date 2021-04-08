import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";


const AddTransactionForm = ({}) =>(
    <Form unstackable>
    <Form.Group>
      <Form.Input
        placeholder="Transaction type"
        type="input"
        icon="tags"
        width={12}
        lable="Description"
      ></Form.Input>
      <Form.Input
        placeholder="Amount"
        type="input"
        icon="dollar"
        iconPosition="left"
        width={4}
        lable="Value"
      ></Form.Input>
     <ButtonSaveOrCancel></ButtonSaveOrCancel>
    </Form.Group>
  </Form>

)

export default AddTransactionForm;