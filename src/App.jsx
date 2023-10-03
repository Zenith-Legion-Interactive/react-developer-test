import './App.css'

import { Link } from 'react-router-dom';

import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <nav>
        <button>
          <Link to='/users'>Users</Link>
        </button>
      </nav>
      <main>
        <Counter />
      </main>
    </>
  )
}

export default App
