import React, {useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(Number);
  return (
    <div>
        <p>Update angka: {count}</p>
        <button onClick={() => setCount(count + 1)}>Tambah angka</button>
        <button onClick={() => setCount(count - 1)}>Kurangi</button>
    </div>
  )
}

export default Count;