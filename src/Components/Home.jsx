import React, { Fragment, useState } from 'react';
import './home.css';
import Section from './Section';
function Home() {
    // hooks 
    console.log("first");
    // component display content => {static data or dynamic data(state)}
    let [data, setData] = useState({
        name: "ahmed ali",
        age: 22
    });
    let [arr, setArr] = useState([10, 20, 30, 40]);
    console.log(typeof data);

    //let name = "mohamed negm"
    function change() {
        console.log("but is clicked");
        // let obj = {
        //     name: "ss",
        //     address: "aswan"
        // }
        // let o2 = { ...obj };

        // data = "ali"; // change state 
        //  data.name = "negm"; // mutation update 
        //  setData({ ...data, name: "negm" }); // change value of data and v dom i have change in my compoent plz make rerender 
        //arr.push(7);
        setArr([...arr, 7]);
        console.log(arr);
    }
    return (
        <Fragment>
            <h1 className="cls">hi from home {data.name}</h1>
            <Section name="work" />
            <h2>{data.age}</h2>
            <h3>{arr}</h3>
            <button onClick={change}>change name</button>
        </Fragment>

    )

}

export default Home;
