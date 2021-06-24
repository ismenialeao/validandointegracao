function logares(){
    myform = document.getElementById("myForm");
    var email = myform.email.value;
    var senha = myform.senha.value; 
    
    if( email == "" || email.indexOf('@') == -1 ){
      alert('Preencha o campo e-mail .');
      myform.email.focus();
      
    }
    
    else if(senha ==""|| senha.length <= 5){
      alert('Preencha o campo senha com no mínimo seis caracters.');
      myform.senha.focus();
    }
}
