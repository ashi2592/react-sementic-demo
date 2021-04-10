
import { Fragment } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine({ description, value, isExpense, id, deleteEntry,editEntry }) {

    
    return (
        <Fragment>
            <Segment color={isExpense ? 'red' : 'green'} size={'tiny'}>
                <Grid columns={4} divided>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            {id}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            {description}
                        </Grid.Column>

                        <Grid.Column width={4}>
                            $ {value}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" bordered onClick={() => editEntry(id)}></Icon>
                            <Icon name="trash" bordered onClick={() => deleteEntry(id)}></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        
        </Fragment>

    )
}

export default EntryLine;