# Use a imagem base do Python
FROM node:18.17

# Crie um diretório para armazenar o código da aplicação dentro do container
WORKDIR /usr/src/app

# Copie o arquivo 'package.json' (e 'package-lock.json', se disponível) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos da sua aplicação para o container
COPY . .

# Exponha a porta em que sua aplicação estará rodando
EXPOSE 3001

# Defina o comando para iniciar sua aplicação
CMD ["npm", "run", "start"]