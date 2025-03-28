namespace escola{
    const nomealuno = document.getElementById("campoAluno");
    const anoNasc = document.getElementById("campoAno");
    const CPF = document.getElementById("campoCPF");
    const endereco = document.getElementById("campoEndereco");
    const tel = document.getElementById("campoTel");
    const nummatri = document.getElementById("campoNumMat");
    const curso = document.getElementById("campoCurso");
    const escola = document.getElementById("campoEscola");
    const nota1 = document.getElementById("campon1");
    const nota2 = document.getElementById("campon2");
    const nota3 = document.getElementById("campon3");
    const nota4 = document.getElementById("campon4");
    const media = document.getElementById("media")

    const cadastrar = document.getElementById("cad");

    let a: Aluno;

    cadastrar.addEventListener("click", ()=>{

        a = new Aluno();
        a.nome = campoAluno.value;
        


        document.getElementById("idade").textContent = a.calcularIdade(2025).toString();

    })

    cadastrar.addEventListener("click", ()=>{



    })

}