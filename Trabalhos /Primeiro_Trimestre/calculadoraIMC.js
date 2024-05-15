function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

function pesoSaudavel(altura, metaIMC) {
    return metaIMC * (altura * altura);
}

function sugerirPeso(peso, altura, metaIMC) {
    const pesoMeta = pesoSaudavel(altura, metaIMC);
    const pesoPerder = peso - pesoMeta;
    if (pesoPerder > 0) {
        return `Para alcançar um IMC saudável, você precisa perder aproximadamente ${pesoPerder.toFixed(2)} kg.`;
    } else if (pesoPerder < 0) {
        const pesoGanhar = -pesoPerder;
        return `Para alcançar um IMC saudável, você precisa ganhar aproximadamente ${pesoGanhar.toFixed(2)} kg.`;
    } else {
        return "Seu peso está dentro da faixa saudável.";
    }
}

document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Peso e altura devem ser números válidos e positivos.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const interpretacao = interpretarIMC(imc);
    let resultado = `Seu IMC é: ${imc.toFixed(2)}<br>Você está classificado como: ${interpretacao}`;
    
    if (imc < 18.5 || imc >= 25) {
        const metaIMC = 24.9; // IMC desejado para estar dentro da faixa de peso normal
        resultado += `<br>${sugerirPeso(peso, altura, metaIMC)}`;
    }

    document.getElementById('resultado').innerHTML = resultado;
});
