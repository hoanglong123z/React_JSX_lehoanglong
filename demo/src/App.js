// import logo from './logo.svg';
import './App.css';
import Class_lehoanglong from './Compenent/Class_lehoanglong';
import Func_JSX_lehoanglong from './Compenent/Func_JSX_lehoanglong';
function App() {
  return (
    <section>
      <h2>Demo JSX</h2>
      {/* Function Component Demo */}
      < Func_JSX_lehoanglong />
      < Func_JSX_lehoanglong fullName="Lê Hoàng long" age="20"/>
      < class_lehoanglong />
      <hr/>
      < Class_lehoanglong info="Hoc ReactJS" time="11" />
      
    </section>
  );
}

export default App;