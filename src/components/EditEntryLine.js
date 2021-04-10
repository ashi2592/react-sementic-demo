import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

export default function EditEntryLine({ isOpen, setIsOpen,description, value,isExpense, setDescription, setValue,setIsExpense,resetEntry }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
               <EntryForm 
               description={description} 
               value={value}
               isExpense={isExpense}
               setIsExpense={setIsExpense}
               setValue={setValue}
               setDescription={setDescription}

               ></EntryForm>
            </Modal.Content>
            <Modal.Actions>
            <Button color='black' onClick={() => resetEntry()}>
                    Nope
                </Button>
                <Button
                    content="Yep, Save"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setIsOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}
