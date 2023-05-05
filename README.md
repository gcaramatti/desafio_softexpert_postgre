# Desafio Grupo SX
Projeto separado em front e back-end

# Tecnologias utilizadas:<br/>
Front-end: React + TypeScript + Vite <br/>
Back-end: PHP Vanilla Rest API

# Como testar?
Ao clonar o projeto, abra 2 terminais:<br/> 
Um terminal dentro da pasta front-end, e nesse digite yarn (para instalar as dependências)<br/>
E em seguida digite yarn dev para executar o projeto.<br/>
Caso seu terminal não reconheça o comando yarn, insira o comando: npm install -g yarn<br/>
*OBS*: O terminal não deve ser utilizando PowerShell.
<br/><br/>
Já o segundo terminal deve estar dentro da pasta back-end, deve-se rodar composer install<br/>
Crie um banco de dados vazio e insira as informações de acesso no arquivo \back-end\App\Core\Model.php<br/>
importe o banco de dados que foi deixado na raiz da pasta back-end (pg_sql.sql)<br/>
E em seguida: composer serve<br/>
*OBS*: Caso seu computador não reconheça o comando composer, faça o download pelo passo a passo a seguir: https://getcomposer.org/download/<br/>
E caso você não tenha o php instalado, você pode instalar o xampp pelo seguinte link: https://www.apachefriends.org/pt_br/download.html (sugestão mais fácil para testes)
