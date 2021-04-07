
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1">Hello Ashish</Header>
        <Statistic size="small" color="green">
          <Statistic.Label>Your Balance</Statistic.Label>
          <Statistic.Value  >$ 2,500</Statistic.Value>
        </Statistic>
        <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size='tiny' color='green'>
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Income:
                  </Statistic.Label>
                  <Statistic.Value >
                    $ 5,000
              </Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size='tiny' color='red'>
                  <Statistic.Label style={{ textAlign: 'left' }}>
                    Outcome:
                   </Statistic.Label>
                  <Statistic.Value>
                    $ 2500
                </Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as="h3">Transaction</Header>
        <Segment size="tiny" color="green" >
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Credit
              </Grid.Column>
              <Grid.Column width={3} >$ 5,000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered > </Icon>
                <Icon name="trash" bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment size="tiny" color="red" >
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Debit
              </Grid.Column>
              <Grid.Column width={3} >$ 2,500</Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered > </Icon>
                <Icon name="trash" bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as="h3">Add New Transaction</Header>

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
            <Button.Group >
              <Button>Cancel</Button>
              <Button.Or />
              <Button primary>Ok</Button>

            </Button.Group>
          </Form.Group>
        </Form>

      </Container>
    </div>
  );
}

export default App;
