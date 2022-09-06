import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { Transaction } from './components/Transaction';
import './App.css';

function App() {
  return (
    <div>
      < Header />
      <div className="container">
        < Balance />
        < IncomeExpenses />
        < TransactionList />
        < Transaction />
      </div>
    </div>
  );
}

export default App;
