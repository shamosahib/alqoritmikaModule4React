import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
     <Student firstName='Shamo' lastName='Naghiyev' kurs={3} group='Web1' checkLesson />
     <Student firstName='Apple' lastName='Macbook' kurs={3} group='Web3' checkLesson/>
     <Student firstName='Lenovo' lastName='Legion' kurs={3} group='Web1' checkLesson={false}/>
    </div>
  );
}

export default App;
