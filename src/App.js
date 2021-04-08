
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import AddTransaction from './components/AddTransaction'
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <div className="App">
      <Container>
        <MainHeader type='h1' title="Hi Budget"></MainHeader>
        <DisplayBalance color="green" size="small" style={{ textAlign: "center" }} title={"Your Balance "} value={"2500"} />
        <DisplayBalances income="5,000" outcome="2,500" />
        <MainHeader type='h3' title="History"></MainHeader>
        <EntryLine amount={"5,000"} type={"Credit"} size={"tiny"} color={'green'} />
        <EntryLine amount={"2,500"} type={"Debit"}  size={"tiny"} color={'red'} />
        <MainHeader type='h3' title="Add New Transaction"></MainHeader>
        <AddTransaction></AddTransaction>
      </Container>
    </div>
  );
}

export default App;
