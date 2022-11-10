import "./App.css";

// TODO: learn from newly after ssc

// Create Component, return multiple HTML froma component
// now dynamicall add datas

function App() {
    const nayoks = ["Anwar", "Jafor", "Salman"];

    return (
        <div className="App">
            <header className="App-header">
                <p>I'm a React Person</p>
                <Person name="Rubel Nayok" age="25" car="3"></Person>
                <Person name="Jhankar PPPP" age="35" car="7" />
                <Person name="Sakib Ali" age="5" car="0"></Person>
                <Person name={nayoks[0]} />
                <Person name={nayoks[1]} />
                {/* ways to call data */}
                <Person />
                <Person></Person>
            </header>
        </div>
    );
}

// 1st letter of component will be of capital letter
// Same in Look, differnt in data

// to dynamically pass the datas from the elements then use props in function

function Person(props) {
    const personStyle = {
        border: "3px solid yellow",
        width: "88%",
        padding: "5px",
        margin: "8px",
    };

    return (
        <div style={personStyle}>
            <h1 style={{ border: "7px solid red", padding: "10px" }}>
                Name: {props.name} & age: {props.age}
            </h1>
            <h3>Hero Person car: {props.car}</h3>
        </div>
    );
}
export default App;
