import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase'

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

  return (
    <div>
      <button onClick={() => toggle(!visible)}>Toggle</button>
      <Comments visible={visible} />
      <A />
    </div>
  );
}

export default App;
