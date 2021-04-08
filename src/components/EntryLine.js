import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine({ amount, type, size, color }) {
    return (
        <Segment color={color} size={size}>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column width={9}>
                        {type}
                    </Grid.Column>

                    <Grid.Column width={4}>
                        $ {amount}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered></Icon>
                        <Icon name="trash" bordered></Icon>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default EntryLine;