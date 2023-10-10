import Result from "../Result/index"
import { useState } from 'react';

function Form() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    return (
        <div className="row">
            <div className="col">
                <form className="form-group">
                    <label className="py-2 formLabel" htmlFor="peso">Insira seu peso</label>
                    <input required type="number" className="py-2 form-control" placeholder="99.9" id="peso" onChange={event => setPeso(parseFloat(event.target.value))}/>
                    <label className="py-2 formLabel" htmlFor="altura">Insira sua altura</label>
                    <input required type="number" className="py-2 form-control" id="altura" placeholder="1.77" onChange={event => setAltura(parseFloat(event.target.value))}/>
                    <Result peso={peso} altura={altura}></Result>
                </form>
            </div>
        </div>
    )
}

export default Form;