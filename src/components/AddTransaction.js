import React from 'react'
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from './EntryForm';


const AddTransactionForm = ({ addEntry, description, value, isExpense, setDescription, setValue, setIsExpense, resetEntry }) => {

  return (<Form unstackable>
    <Form.Group>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      ></EntryForm>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        resetEntry={resetEntry}
      ></ButtonSaveOrCancel>
    </Form.Group>
  </Form>)

}

export default AddTransactionForm;