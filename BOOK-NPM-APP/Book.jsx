import './App.css';
function App(){
    return(
        <div>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    );
}
function Book() {
    return(
        <div>
            <img src="" width="200" alt="Book Image"/>
            <h3>Title : Physics Book</h3>
            <h4>Price : ₹385</h4>
        </div>
    )
    
}
const parent=document.getElementById('root')
const root = ReactDOM.createRoot(parent);
root.render(<App/>);
