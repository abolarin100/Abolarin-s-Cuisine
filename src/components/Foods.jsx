import React, {useState} from 'react';



const Foods = (props) => {
    const [food, setFood] = useState("");
    const [found, setFound] = useState("unknown");

    const handleClick = (e) => {
        // alert(`You submitted ${name} successfully`);
        setFood(`${props.name} is a major source of ${props.classes} in  ${props.location}`);
    }

    const foodClick = (e) => {
        setFound(`${props.name} is grown in ${props.location}`);
    }
    return (
        <div>

<h1>Food List</h1>
            <p> name= "Rice" classes= "Carbohydrate" location = "Nasarawa"</p>
            <p>name= "Beans" classes= "legumes" location = "Adamawa"</p>
            <p>name= "Apple" classes= "orchid" location = "Plateu" </p>
            <p> name= "Watermelon" classes= "Vitamin" location = "Akure"</p>
            
            
            
            
            <p><b>Food Name:</b> {props.name}</p>
            <p><b>Food Class:</b> {props.classes}</p>
            <p><b>Food Location</b>: {props.location}</p>
            <p>{food}</p>
            <p>{found}</p>
            <button onClick={handleClick}>Submit</button>
            <button onClick={foodClick}>Food Class</button>
            <hr />
        </div>
    );
}

export default Foods;
