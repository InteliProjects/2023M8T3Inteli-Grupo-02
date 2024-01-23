#!/bin/bash

# Verifica se o script está sendo executado como superusuário
if [ "$EUID" -ne 0 ]; then
    echo "Por favor, execute como superusuário (sudo)."
    exit 1
fi

# Atualiza a lista de pacotes
apt update

# Instala o hping3
apt install -y hping3

# Verifica se a instalação foi bem-sucedida
if [ $? -eq 0 ]; then
    echo "Instalação do hping3 concluída com sucesso."

    # Executa o hping3 com privilégios de superusuário
    echo "Executando o hping3..."
    sudo hping3 -p 3000 127.0.0.1 --flood
else
    echo "Erro ao instalar o hping3."
fi