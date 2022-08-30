import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [count, setcount] = useState(0)

    function add(){
        if(count < stock){
        setcount(count + 1)
        }
    }

    function substract(){
        if(count > 1){
        setcount(count -1)
        }
    }

    function reset(){
        setcount(0)
    }


    return (
        <div>
            <div className='counter-box'>
                <h1>Count</h1>
                <p>Stock: {stock} </p>
                <p>Cantidad:{count}</p>

                <div>
                    <button className='btn' onClick={substract}> - </button>
                    <button className='btn' onClick={reset}> Reset </button>
                    <button className='btn' onClick={add}> + </button>
                </div>
                <div>
                    <button className='btn' onClick={() => onAdd(count)}>Confirmar</button>
                </div>  
            </div>
        </div>
    );
}

export default ItemCount;
