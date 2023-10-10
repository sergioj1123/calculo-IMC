function Result (props:{peso: number, altura:number}){
    
    const calcIMC = (peso:number, altura:number):number =>{
        return peso / (altura*altura);
    };

    const result = () =>{
        const imc = calcIMC(props.peso, props.altura);
        if(!Number.isNaN(imc)&&imc !== Infinity){
            if(imc<18.5){
                return `IMC = ${imc}, Abaixo do Peso`
            }else if(imc >18.6 && imc < 24.9){
                return `IMC = ${imc}, Peso ideal`
            }else if(imc >25 && imc <29.9){
                return `IMC = ${imc}, Levemente acima do peso`
            }else if(imc >30 && imc < 34.9){
                return `IMC = ${imc}, Obesidade Grau 1`
            }else if(imc >35 && imc < 39.9){
                return `IMC = ${imc}, Obesidade Grau 2`
            }else{
                return `IMC = ${imc}, Obesidade Grau 3`
            }
        }else{
            return "Insira seu peso e altura para obter um resultado"
        }
    }



    return (
        <>
            <h2 className="text-center my-4 ">{result()}</h2>
        </>
    )
}

export default Result;