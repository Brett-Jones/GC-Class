
//GreetingPros is a type interface
type GreetingProps = {
    name: string;
    age: number;
};


function Greeting({ name, age } : GreetingProps) {
    return (
        <div>
            <h2>Hello, {name}</h2>
            <p>You are, {age} years old.</p>
        </div>
    )
}



export default Greeting;




