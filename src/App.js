import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const nayoks = ["Razzak", "Jasim", "Alomgir", "Salman", "Khabib"];
    const products = [
        { productName: "Photoshop", productPrice: "$90.99" },
        { productName: "Illustrator", productPrice: "$53.69" },
        { productName: "Abode PDF Editor", productPrice: "$25.29" },
        { productName: "PDF Viewr", productPrice: "$16.69" },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <p>I'm a React Person</p>
                {/* load dynamic data from serever/API */}
                <Users />
                <Counter /> <br />
                {products.map((eachProduct) => (
                    <Product
                        name={eachProduct.productName}
                        price={eachProduct.productPrice}
                    />
                ))}
                <ul>
                    {nayoks.map((nayok) => (
                        <li>{nayok}</li>
                    ))}
                    {products.map((eachProduct) => (
                        <li>
                            Prodduct Name: {eachProduct.productName}, Product
                            Price: {eachProduct.productPrice}
                        </li>
                    ))}
                </ul>
                <Product
                    name={products[0].productName}
                    price={products[0].productPrice}
                />
                <br />
                <Product
                    name={products[1].productName}
                    price={products[1].productPrice}
                ></Product>
                {/* pass object to components and access object */}
                <DiscountProduct theProduct={products[3]} />
                {/* thorugh destructuring */}
                <OldProduct stockOutProduct={products[2]} />
                <Person name="Rubel Nayok" age="25" car="3"></Person>
                <Person name="Jhankar PPPP" age="35" car="7" />
            </header>
        </div>
    );
}

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <>
            <h4>Dynamic users: {users.length}</h4>
            <ul>
                {users.map((user) => (
                    <li>
                        id: {user.id} --- {user.name} --- phone: {user.phone}
                    </li>
                ))}
            </ul>
        </>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    // const handleIncrease = () => {
    //     setCount(count + 1);
    // };
    const decrease = () => {
        if (count !== 0) setCount(count - 1);
        else;
    };
    return (
        <div style={{ border: "4px solid red", padding: "6px" }}>
            A counter app, where negative values are not valid.
            <h2>Count: {count}</h2>
            {/* <button onClick={handleIncrease}>Increase</button> <br /> */}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
            <br />
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

function Product(props) {
    const productStyle = {
        border: "5px solid orange",
        borderRadius: "5px",
        backgroundColor: "#4C1C24",
        height: "250px",
        width: "220px",
        float: "left",
    };

    return (
        <div style={productStyle}>
            <h4>{props.name}</h4>
            <h3>{props.price}</h3>
            <button>Buy Now</button>
        </div>
    );
}

function DiscountProduct(props) {
    const font = {
        fontSize: "14px",
        color: "salmon",
    };
    return (
        <>
            <p style={font}>30% discount!!!</p>
            <h4>{props.theProduct.productName}</h4>
            <h3>{props.theProduct.productPrice}</h3>
            <button>Buy Now</button>
        </>
    );
}

// through destructuring, but remember to use the same variable name used for destructuring and props
function OldProduct(props) {
    const { productName, productPrice } = props.stockOutProduct;
    return (
        <div>
            <h5>{productName}</h5>
            <h4>{productPrice}</h4>
            <button>Stock Out</button>
        </div>
    );
}

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
                Name: {props.name} and age: {props.age}
            </h1>
            <h3>Hero Person car: {props.car}</h3>
        </div>
    );
}
export default App;
