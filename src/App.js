import logo from './logo.svg';
import './App.css';
import {ChooseUser} from "./chooseUser";

function App() {
  return (
    <div className={"info-site"}>
      <h1 className={"user-title"}>User Information</h1>
        <ChooseUser info={users}></ChooseUser>
    </div>
  );
}

const users = [
    {
        "id":0,
        "name":"nie wybrano",
        "lastName":"",
    },
    {
        "id":1,
        "name":"Janek",
        "lastName":"Bak",
        "email":"jak@wp.pl",
        "date":"12-12-2012"
    },
    {
        "id":2,
        "name":"Maryla",
        "lastName":"Rodowicz",
        "email":"mana@wp.pl",
        "date":"15-12-2015"
    },{
        "id":3,
        "name":"Dariusz",
        "lastName":"Cichocki",
        "email":"dc@wp.pl",
        "date":"15-01-2001"
    },
];

export default App;
