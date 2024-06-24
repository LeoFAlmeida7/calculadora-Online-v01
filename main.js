function somar(){
    let txt1A = window.document.getElementById('ad1');
    let txt2A = window.document.getElementById('ad2');
    let n1Ad = Number(txt1A.value);
    let n2Ad = Number(txt2A.value);
    let Ad = n1Ad + n2Ad ;
    res1.innerHTML =`A soma entre <strong>${n1Ad}</strong> e <strong>${n2Ad}</strong> é igual = <strong>${Ad}</strong>`
}

function sub(){
    let txt1Sub = window.document.getElementById('sub1');
    let txt2Sub = window.document.getElementById('sub2');
    let n1Sub = Number(sub1.value);
    let n2Sub = Number(sub2.value);
    let sub = n1Sub - n2Sub;
    res2.innerHTML = `A subtração entre <strong>${n1Sub}</strong> e <strong>${n2Sub}</strong> é igual = <strong>${sub}</strong>`
}

function mult(){
    let txt1Mult = window.document.getElementById('mul1');
    let txt2Mult = window.document.getElementById('mul2');
    let n1Mult = Number(mul1.value);
    let n2Mult = Number(mul2.value);
    let mult = n1Mult * n2Mult ;
    res3.innerHTML = `A multiplicação entre <strong>${n1Mult}</strong> e <strong>${n2Mult}</strong> é igual = <strong>${mult}</strong>`;
}

function divi(){
    let txt1Div = window.document.getElementById('div1');
    let txt2Div = window.document.getElementById('div2');
    let n1Div = Number(div1.value);
    let n2Div = Number(div2.value);
    let divis = n1Div / n2Div ;
    res4.innerHTML = `A divisão entre <strong>${n1Div}</strong> e <strong>${n2Div}</strong> é igual = <strong>${divis}</strong>`
}

function expo(){
    let txt1Exp = window.document.getElementById('exp1');
    let txt2Exp = window.document.getElementById('exp2');
    let n1Exp = Number(exp1.value);
    let n2Exp = Number(exp2.value);
    let expo = n1Exp ** n2Exp ;
    res5.innerHTML = `A exponenciação entre <strong>${n1Exp}</strong> e <strong>${n2Exp}</strong> é igual = <strong>${expo}</strong>`
}