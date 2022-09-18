// page Login
// adicionar conteudo para label
document.getElementById("lblSenha").innerHTML = "Senha:";

// placeholder
var input = document.getElementById ("email_usuario");
input.placeholder = "Digite seu email/usuário aqui...";

var input2 = document.getElementById ("password");
input2.placeholder = "Digite sua senha aqui...";

// formatar um input 
document.getElementById("email_usuario").style.border = "solid #ccc 1px";

// criando objeto que recebe os valore do formulário
function aindaNaoSei(){
 const valores = {
    email_usuario: document.getElementById("email_usuario").value , 
    password: document.getElementById ("password").value 
 };

 console.log(valores)
};

// page cadastro de clientes
function EnviarCliente(){
    const valores2 = {
       nome: document.getElementById("name").value,
       email: document.getElementById("email").value,
       telefone: document.getElementById("tel").value,
       senha: document.getElementById("password").value,
       Confirm_senha: document.getElementById("passwordConfirm").value
    };
   
    console.log(valores2)
};

// page cadastro adm 
function EnviarAdm(){
    const valores3 = {
       nome: document.getElementById("name").value,
       email: document.getElementById("email").value,
       telefone: document.getElementById("tel").value,
       senha: document.getElementById("password").value,
       Confirm_senha: document.getElementById("passwordConfirm").value
    };
   
    console.log(valores3)
};

// page produtos 
function EnviarProduto(){
    const valores4 = {
       cod: document.getElementById("cod").value,
       produto: document.getElementById("produto").value,
       quantidade: document.getElementById("Quantidade").value,
       dinheiro: document.getElementById("Preco_compra").value,
       dinheiro: document.getElementById("Preco_de_venda").value
    };
   
    console.log(valores4)
};

// Mascaras 

function mascara_telefone() {

    var tel = document.getElementById("tel").value
    console.log(tel)
    tel = tel.slice(0,14) 
    console.log(tel)
    document.getElementById("tel").value=tel
    tel=document.getElementById("tel").value.slice(0,10)
    console.log(tel)
           

    var tel_formatado = document.getElementById("tel").value
    if (tel_formatado[0]!="(") {
        if(tel_formatado[0]!=undefined){
            document.getElementById("tel").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")"){
        if(tel_formatado[3]!=undefined){
            document.getElementById("tel").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }

    if (tel_formatado[9]!="-"){
        if(tel_formatado[9]!=undefined){
         document.getElementById("tel").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
}



function mascara_dinheiro_cifrao (){
    var dinheiro_formatado = document.getElementById("dinheiro").value
    if (dinheiro_formatado[0]!="R"){
        if(dinheiro_formatado[0]!=undefined){
            document.getElementById("dinheiro").value="R$"+dinheiro_formatado[0];
        }
    }
    
    if (dinheiro_formatado[1]!="$"){
        if(dinheiro_formatado[1]!=undefined){
            document.getElementById("dinheiro").value=dinheiro_formatado[0]+"$"+dinheiro_formatado[1];
        }
    }
}
        

function mascara_dinheiro_virgula (){
    var dinheiro_formatado = document.getElementById("dinheiro").value;
    if (dinheiro_formatado[dinheiro_formatado.length-3]!=",") {
        if (dinheiro_formatado[dinheiro_formatado.length-2]==",") {
            document.getElementById("dinheiro").value = dinheiro_formatado+"0";
        }
        else
        {
            if (dinheiro_formatado[dinheiro_formatado.length-1]==",") {
                document.getElementById("dinheiro").value = dinheiro_formatado+"00";
            }
            else{
                document.getElementById("dinheiro").value = dinheiro_formatado+",00";
            }
        }

    }
}

function moeda(z){
v = z.value;
v=v.replace(/\D/g,"") // permite digitar apenas numero
v=v.replace(/(\d{1})(\d{14})$/,"$1.$2") // coloca ponto antes dos ultimos digitos
v=v.replace(/(\d{1})(\d{11})$/,"$1.$2") // coloca ponto antes dos ultimos 11 digitos
v=v.replace(/(\d{1})(\d{8})$/,"$1.$2") // coloca ponto antes dos ultimos 8 digitos
v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") // coloca ponto antes dos ultimos 5 digitos
v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") // coloca virgula antes dos ultimos 2 digitos
z.value = v;
}
