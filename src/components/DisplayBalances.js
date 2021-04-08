import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ income, outcome }) => (
    <Segment>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <DisplayBalance color="green" size="tiny" style={{ textAlign: "left" }} title={"Income: "} value={income} />
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance color="red" size="tiny" style={{ textAlign: "left" }} title={"Outcome: "} value={outcome} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
);
export default DisplayBalances;