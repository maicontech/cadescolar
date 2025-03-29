"use strict";
var escola;
(function (escola) {
    const btnCalcularMedia = document.getElementById("calcmedia");
    const btnCadastrar = document.getElementById("cad");
    const campoAluno = document.getElementById("campoAluno");
    const campoAno = document.getElementById("campoAno");
    const campoCPF = document.getElementById("campoCPF");
    const campoEndereco = document.getElementById("campoEndereco");
    const campoTel = document.getElementById("campoTel");
    const campoNumMat = document.getElementById("campoNumMat");
    const campoCurso = document.getElementById("campoCurso");
    const campoEscola = document.getElementById("campoEscola");
    const campon1 = document.getElementById("campon1");
    const campon2 = document.getElementById("campon2");
    const campon3 = document.getElementById("campon3");
    const campon4 = document.getElementById("campon4");
    const media = document.getElementById("media");
    let a;
    a.nome = campoAluno.value;
    a.anoNasc = parseInt(campoAno.value);
    a.cpf = campoCPF.value;
    a.endereco = campoEndereco.value;
    a.tel = campoTel.value;
    a.matricula = parseInt(campoNumMat.value);
    a.curso = campoCurso.value;
    a.escola = campoEscola.value;
    a.nota1 = parseFloat(campon1.value);
    a.nota2 = parseFloat(campon2.value);
    a.nota3 = parseFloat(campon3.value);
    a.nota4 = parseFloat(campon4.value);
    let aluno = null;
    btnCadastrar.addEventListener("click", () => {
        if (!campoAluno.value || isNaN(campoAno.valueAsNumber) || !campoCPF.value || !campoEndereco.value || !campoTel.value || isNaN(campoNumMat.valueAsNumber) || !campoCurso.value || !campoEscola.value || isNaN(campon1.valueAsNumber) || isNaN(campon2.valueAsNumber) || isNaN(campon3.valueAsNumber) || isNaN(campon4.valueAsNumber)) {
            alert("Por favor, preencha todos os campos corretamente!");
            return;
        }
        aluno = new escola.Aluno(a.nome, a.anoNasc, a.cpf, a.endereco, a.tel, a.matricula, a.curso, a.escola, a.nota1, a.nota2, a.nota3, a.nota4);
        document.getElementById("nome").textContent = a.nome;
        document.getElementById("ano").textContent = a.anoNasc.toString();
        document.getElementById("idade").textContent = a.calcularIdade(2025).toString();
        document.getElementById("cpf").textContent = a.cpf;
        document.getElementById("end").textContent = a.endereco;
        document.getElementById("tel").textContent = a.tel;
        document.getElementById("nummat").textContent = a.matricula.toString();
        document.getElementById("curso").textContent = a.curso;
        document.getElementById("escola").textContent = a.escola;
    });
    btnCalcularMedia.addEventListener("click", () => {
        document.getElementById("n1").textContent = a.nota1.toString();
        document.getElementById("n2").textContent = a.nota2.toString();
        document.getElementById("n3").textContent = a.nota3.toString();
        document.getElementById("n4").textContent = a.nota4.toString();
        document.getElementById("media").textContent = a.calcularMedia().toString();
    });
})(escola || (escola = {}));
