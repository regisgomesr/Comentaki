import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase'
import { end } from 'worker-farm';

const useDatabase = endpoint => {
  const [data, setData] = useState({})

  useEffect(() => {
    
    const ref = firebase.database().ref(endpoint)
    ref.on('value', snapshot => {
      setData(snapshot.val())
    })
    return () => {
      ref.off()
    } 
  }, [endpoint])
  return data
}

const useDatabasePush = endpoint => {
  const [state, setState] = useState('')

  const save = data => {
    const ref = firebase.database().ref(endpoint)
    ref.push(data, err => {
      if(err){
        setState('ERROR')
      }else{
        setState('SUCESS')
      }
    })
  }
  return [state, save]

}

const Comments = ({ visible }) => {

  const endpoint = visible ? 'test' : 'test/b'
  const data = useDatabase(endpoint)
  return (
    <pre>{JSON.stringify(data)}</pre>
  )
}

const A = () => {
  const data = useDatabase('test/a')
  return (<pre>{JSON.stringify(data)}</pre>)
}

function App() {

  const [visible, toggle] = useState(true)
  const [status, save] = useDatabasePush('test')

  return (
    <div>
      <button onClick={() => { 
        //toggle(!visible) 
        save({ valor: 1, b: 2 })
      }}>Toggle</button>
      Status: {status}
       
      <Comments visible={visible} />
      <A />
    </div>
  );
}

export default App;
