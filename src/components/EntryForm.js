import React, { Fragment } from 'react'
import { Checkbox, Form, Label } from 'semantic-ui-react'

export default function EntryForm({description, value,isExpense, setDescription, setValue,setIsExpense}) {
    return (
        <Fragment>
            <Form.Input
                placeholder="Transaction type"
                type="input"
                icon="tags"
                width={4}
                lable="Description"
                value={description}
                onChange={(event) => { setDescription(event.target.value) }}
            ></Form.Input>
            <Form.Input
                placeholder="Amount"
                type="input"
                icon="dollar"
                iconPosition="left"
                width={4}
                lable="Value"
                value={value}
                onChange={(event) => { setValue(event.target.value) }}

            ></Form.Input>

            <Form.Input
                width={4}
                
            >
                <Label>Is Expense</Label>
                <Checkbox toggle checked={isExpense}
                    onChange={() => setIsExpense(!isExpense)}
                />
            </Form.Input>
        </Fragment>
    )
}
