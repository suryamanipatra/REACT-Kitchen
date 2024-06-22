
import './App.css';
import FunctionComponent from "./components/FunctionComponent"
import ClassComponents from "./components/ClassComponents"
import LernProps from "./components/LernProps"
import LearnJSX from './components/LearnJSX';
import StateInClassComponent from './components/stateInClassComponent';
import EventHandle from './components/EventHandle'
import EventHandleClass from './components/EventHandleClass'
import EventHandlingClass from './components/EventHandlingClass'


function App() {
  return (
    <div className="App">
        <FunctionComponent />
        <LernProps name = "Surya"  lName = "Patra"> <p>This is child functional components</p> </LernProps>
        <LernProps name = "Lalit" lName = "Mohanty"/>
        <LernProps name = "Amit" lName = "Pradhan"/>

        <ClassComponents > <p>I am child class component</p> <span>This is second one</span></ClassComponents>
        <LearnJSX />
        <StateInClassComponent />
        <EventHandle />
        <EventHandleClass />
        <EventHandlingClass />
      </div>
  );
}

export default App;
