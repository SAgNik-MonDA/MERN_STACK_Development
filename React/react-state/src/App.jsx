import './App.css'
import Counter from './Counter.jsx';
import LikeButton from './LikeButton.jsx';
import LudoBoard from './LudoBoard.jsx';
import TodoList from './TodoList.jsx';
import Lottery from './Lottery.jsx';
import TicketNum from './TicketNum.jsx';
import Ticket from './Ticket.jsx';

function App() {
  return (
    <>
    {/* <h1>States in react</h1> */}
    {/* <Counter /> */}

    {/* <LikeButton /> */}

    {/* <LudoBoard/> */}

    {/* <TodoList / > */}

    <Ticket ticket={[0,1,3]}/>
    <Ticket ticket={[5,4,1]}/>
    </>
  );
}

export default App
