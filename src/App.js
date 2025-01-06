import './app.css';
import Background from './components/Background';
import Pokemon from './components/Pokemon';
import Counter from './components/Counter';

function App() {
  return (
    <div className="app">
      <Background/>
      <Pokemon/>
      <div className='bench'>
        <Pokemon/>
        <Pokemon/>
        <Pokemon/>
        <Pokemon/>
        <Pokemon/>
      </div>
      <div className='counters'>
        <Counter valor={10} tipo="damage"/>
        <Counter valor={20} tipo="damage"/>
        <Counter valor={30} tipo="damage"/>
        <Counter valor={40} tipo="damage"/>
        <Counter valor={50} tipo="damage"/>
        <Counter valor={50} tipo="poisoned"/>
        <Counter valor={50} tipo="burned"/>
        <Counter valor={50} tipo="asleep"/>
      </div>
    </div>
  );
}

export default App;
