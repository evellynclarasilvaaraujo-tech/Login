let usuarios = [
  { nome: "Evellyn", email: "evellyn123@gmail.com", senha: "eve123456" },
  { nome: "João", email: "joao123@gmail.com", senha: "joao123456" },
  { nome: "Maria", email: "maria123@gmail.com", senha: "maria123456" }
];

const formLogin = document.getElementById("formLogin");
const campoSenha = document.getElementById('senha');
const botaoOlho = document.getElementById('btnAlternarSenha');
const iconeOlho = document.getElementById('iconeAlternarSenha');

const senha = document.getElementById("senha");
const botao = document.getElementById("btnAlternarSenha");
const icone = document.getElementById("iconeAlternarSenha");

botao.addEventListener("click", function () {
  if (senha.type === "password") {
    senha.type = "text";
    icone.textContent = "🙈";
  } else {
    senha.type = "password";
    icone.textContent = "👁️";
  }
});

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  logar();
});

function logar() {
  let email = document.querySelector('#email').value.trim();
  let senha = document.querySelector('#senha').value;
  let termoDeUso = document.querySelector('#termoDeUso').checked;

  if (email == '') {
    alert("O campo E-mail é obrigatório!");
    return;
  }
  if (senha == '') {
    alert("O campo Senha é obrigatório!");
    return;
  }
  if (termoDeUso == false) {
    alert("Você deve concordar com os termos de uso para logar!");
    return;
  }

  let usuarioEncontrado = usuarios.find(item => {
    return item.email == email && item.senha == senha;
  });

  if (usuarioEncontrado) {
    //alert("Usuário logado com sucesso!");
    window.location.href = "home.html";
  } else {
    alert("E-mail ou senha estão incorretos!");
  }
}