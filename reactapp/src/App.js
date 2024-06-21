
import './App.css';
import FunctionComponent from "./components/FunctionComponent"
import ClassComponents from "./components/ClassComponents"
import LernProps from "./components/LernProps"
import LearnJSX from './components/LearnJSX';



function App() {
  return (
    <div className="App">
        <FunctionComponent />
        <LernProps name = "Surya"  lName = "Patra"> <p>This is child functional components</p> </LernProps>
        <LernProps name = "Lalit" lName = "Mohanty"/>
        <LernProps name = "Amit" lName = "Pradhan"/>

        <ClassComponents > <p>I am child class component</p> <span>This is second one</span></ClassComponents>
        <LearnJSX />
      </div>
  );
}

export default App;
