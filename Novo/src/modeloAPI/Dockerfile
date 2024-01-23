# Use a imagem base do Python
FROM python:3.11

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos necessários para o diretório de trabalho
COPY requirements.txt requirements.txt

# Instale as dependências
RUN pip install -r requirements.txt

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Informe ao Docker que a aplicação escuta na porta 5000
EXPOSE 5000

# Defina o comando para rodar a aplicação
CMD ["python3", "index.py"]