import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
    <div>
      <Item name="detergent">
        Hello ji ye print krne ke liye childer ko call krna prega inside components
      </Item>
      <ItemDate day="23" month="March" year="2021"/>
      <Item name="soap" />
      <ItemDate day="15" month="April" year="2020"/>
      <Item name="shampoo" />
      <ItemDate day="10" month="May" year="2023"/>
    </div>
  );
}

export default App;
