import './app.css';
import Background from './components/Background';
import Pokemon from './components/Pokemon';
import Counter from './components/Counter';
import Vastro from './components/Vastro';
import Coin from './components/Coin';

function App() {
  return (
    <div className="app">
      <Background/>
      <div className='fronLine'>
        <Vastro/>
        <Pokemon/>
        <Coin/>
      </div>
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
        <Counter valor={0} tipo="poisoned"/>
        <Counter valor={0} tipo="burned"/>
        <Counter valor={0} tipo="asleep"/>
      </div>
    </div>
  );
}

export default App;
