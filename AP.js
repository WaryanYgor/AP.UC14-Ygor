$(document).ready(function () {
    var backgrounds = [
      "https://media.cnn.com/api/v1/images/stellar/prod/191121212606-tesla-cybertruck.jpg?q=x_143,y_0,h_1222,w_2171,c_crop/h_540,w_960/f_webp",
      "https://media.cnn.com/api/v1/images/stellar/prod/191121213203-tesla-cybertruck.jpg?q=x_22,y_0,h_1322,w_2349,c_crop/h_540,w_960/f_webp",
      "https://media.cnn.com/api/v1/images/stellar/prod/191121213439-tesla-cybertruck.jpg?q=x_3,y_3,h_1395,w_2480,c_crop/h_540,w_960/f_webp",
      "https://media.cnn.com/api/v1/images/stellar/prod/191122092415-01-tesla-cybertruck-musk-1121.jpg?q=x_122,y_165,h_1564,w_2779,c_crop/h_540,w_960/f_webp"        
    ];
    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    
    // cria o elemento de imagem e o contêiner
    var img = $('<img>').attr('src', randomBackground);
    var container = $('<div>').addClass('image-container');
    
    // adiciona a imagem ao contêiner e o contêiner ao corpo da página
    container.append(img);
    $('body').append(container);
    
    
    $('#cadastro-btn').click(function() {
      var nome = prompt('Qual é o seu nome?');
      var dataNascimento = prompt('Qual é a sua data de nascimento? (Formato: dd/mm/aaaa)');
      var cpf = prompt('Qual é o seu CPF? (Somente números)');
      var rg = prompt('Qual é o seu RG?');
      var cidade = prompt('Em qual cidade você mora?');
      var formaPagamento = prompt('Qual é a sua forma de pagamento? (Dinheiro, Cartão de débito, Cartão de crédito ou Pix)');
      
      var mensagem = `Nome: ${nome}\nData de Nascimento: ${dataNascimento}\nCPF: ${cpf}\nRG: ${rg}\nCidade: ${cidade}\nForma de Pagamento: ${formaPagamento}`;
      
      alert(mensagem);
    })
  })
