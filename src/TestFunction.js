import { useState, useEffect } from 'react';
import './style.css';

function TestFunction(props){
    const [count, setCount] = useState(0);
    const [randomData, setRandomData] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('1');
    const [input3, setInput3] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const [itemName, setItemName] = useState('');
    const [selectedOption, setSelectedOption] = useState('A');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const [fetchResult, setFetchResult] = useState([]);

    const onIncreaseClick = () => {
        setCount(count+1);
    }

    const fetchRandomData = async () => {
        let url = "https://randomuser.me/api";
            return fetch(url)
            .then(res => res.json());
            
    }

    const fetchApple = async () => {
        let url = "https://itunes.apple.com/search?term=taylor&media=music&entity=album&attribute=artistTerm&limit=500";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let results = []
            for(let obj of data.results){
                results.push(obj);
            }
            setFetchResult([...results]);
        });
    }

    const onInput1Change = (e) => {
        setInput1(e.target.value);
    }

    const onInput2Change = (e) => {
        setInput2(e.target.value);
    }

    const onInput3Minus = (e) => {
        setInput3(Number(input3)-1);
    }

    const onInput3Plus = (e) => {
        setInput3(Number(input3)+1);
    }

    const onInput3Change = (e) => {
        setInput3(e.target.value);
    }

    const onItemNameChange = (e) => {
        setItemName(e.target.value);
    }

    const onAddItemClick = (e) => {
        let item = itemName;
        todoList.push(item);
        setTodoList([...todoList]);
        setItemName("");
    }

    const onItemEdit = (e, index) => {
        e.preventDefault();
        setIsEdit(true);
    }

    const onItemEditFinished = (e, index) => {
        todoList.splice(index, 1, e.target.value);
        setIsEdit(false);
    }

    const onItemRemove = (e, index) => {
        e.preventDefault();
        todoList.splice(index, 1);
        setTodoList([...todoList]);
    }

    const onRadioChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLoginClick = (e) => {
        if(username === "tommy" && password === "1234"){
            alert("Welcome!");
        }else{
            alert("Wrong credentials.");
        }
    }


    useEffect(() => {
        fetchRandomData().then(data => setRandomData(JSON.stringify(data)));
        fetchApple();
    }, []);

    // let todoDisplay = 

    // console.log(todoDisplay);


    return(
        <>
            <p>
                {count}
                {randomData}
            </p>
            <button onClick={onIncreaseClick}>Click</button>

            {/* <button onClick={fetchRandomData}>Fetch Data</button> */}
            <input value={input1} onChange={(e) => onInput1Change(e)}></input>
            <fieldset>
                <legend>Hi</legend>
            <select onChange={(e) => onInput2Change(e)}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            </fieldset>
            <br></br>
            Option {input2}
            <fieldset>
                <legend>yoyo</legend>
                <button onClick={onInput3Minus}>-</button>
                <input value={input3} onChange={onInput3Change}></input>
                <button onClick={onInput3Plus}>+</button>
            </fieldset>
            <br>
            </br>
            {todoList.map((item, index) => {
                let itemCard = item;
                if(isEdit){
                    itemCard = <input type="text" defaultValue={item} onBlur={(e) => onItemEditFinished(e, index)}></input>
                }
                return(
                <div key={index}>
                    <li>{index} {itemCard}
                    <a href="#" onClick={(e) => onItemEdit(e, index)}>Edit</a>
                    <a href="#" onClick={(e) => onItemRemove(e, index)}>Delete</a>
                    </li>
                </div>
                )
            })}
            <label>Enter a new item:</label>
            <input value={itemName} onChange={onItemNameChange}></input>
            <button onClick={onAddItemClick}>Add Item</button>
            
            <form>
                <input type="radio" name="choice" value="A" onChange={onRadioChange} defaultChecked></input>A
                <input type="radio" name="choice" value="B" onChange={onRadioChange}></input>B
                <br></br>
                <label>Username: </label><input value={username} onChange={onUsernameChange} type="text" name="id"></input><br></br>
                <label>Password: </label><input value={password} onChange={onPasswordChange} type="password" name="password"></input><br></br>
                <button onClick={onLoginClick}>Login</button>
                
            </form>
            <fieldset>
                {selectedOption}
            </fieldset>

            <div className="container">
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="fetch-result">
            {fetchResult.map((item, index) => {
                // console.log(JSON.stringify(item));
                return (
                    <div key={index}>
                        <img src={item.artworkUrl100}></img>
                        <div>{item.artistName}, {item.collectionName}</div>
                    </div>
                    
                )
            })}
            </div>
            
        </>
    );
}
export default TestFunction;