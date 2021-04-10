import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import AddTransaction from './components/AddTransaction'
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import EditEntryLine from './components/EditEntryLine';
import { ADD_ENTRY, DELETE_ENTRY, EDIT_ENTRY } from './redux/budget/actions';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getBudget } from './redux/selector';


var initialEntries = []


function App({ store }) {

  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [id, setId] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const dispatch = useDispatch()

  const deleteEntry = (id) => {
    dispatch({type:DELETE_ENTRY,payload:{ id}})
  }

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex(x => x.id === id);
      const entry = entries[index];
      setDescription(entry.description)
      setIsExpense(entry.isExpense)
      setValue(entry.value);
      setId(entry.id);
      setIsOpen(true)
    }
  }




  const addEntry = () => {
    dispatch({type:ADD_ENTRY,payload:{ id: uuidv4(), description, value: Number(value), isExpense }})
    resetEntry()
  }

  const resetEntry = () => {
    setDescription('')
    setIsExpense('')
    setValue('');
    setId('');
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) {
      const index = entries.findIndex(x => x.id === id);
      if (index > 0) {
        const newEntries = [...entries]
        newEntries[index].description = description;
        newEntries[index].value = value;
        newEntries[index].isExpense = isExpense;

        dispatch({type:EDIT_ENTRY, payload:{...{id,description,value:Number(value),isExpense}}})

        resetEntry()
      }

    }
  },
    // eslint-disable-next-line  react-hooks/exhaustive-deps
    [isOpen])


  const budgetHistory = useSelector(state => getBudget(state))
  useEffect(() => {
    let totalIncome = 0;
    let expense = 0;
    budgetHistory.map(x => {
      if (x.isExpense) {
        expense += x.value;
      } else {
        totalIncome += x.value;
      }
      return x;
    })

    setTotal(totalIncome - expense)
    setTotalIncome(totalIncome)
    setTotalExpense(expense)

  },
    // eslint-disabled-next-line  react-hooks/exhaustive-deps
    [budgetHistory])
  // / redux

  useEffect(() => {
    if (budgetHistory) {
      setEntries(budgetHistory)
    }
  },
    [budgetHistory])




  return (
    <div className="App">
      <Container>
        <MainHeader type='h1' title="Hi Budget"></MainHeader>
        <DisplayBalance color="green" size="small" style={{ textAlign: "center" }} title={"Your Balance "} value={total} />
        <DisplayBalances income={totalIncome} outcome={totalExpense} />
        <MainHeader type='h3' title="History"></MainHeader>
        <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}></EntryLines>
        <MainHeader type='h3' title="Add New Transaction"></MainHeader>
        <AddTransaction addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
          resetEntry={resetEntry}
        ></AddTransaction>


        <EditEntryLine isOpen={isOpen} setIsOpen={setIsOpen}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
          resetEntry={resetEntry}
        ></EditEntryLine>
      </Container>
    </div >
  );
}

export default App;

