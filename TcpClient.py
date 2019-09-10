#APLICAÇÃO CLIENTE BÁSICA TCP
import socket
print("APP CLIENTE SIMPLES")
conect = (input('informe endereço de conexão:') , int(input("informe porta de conexão:")))
#endereço ip e porta do servidor
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #cria socket do cliente
client_socket.connect(conect) #conecta cliente ao servidor

while True:
    if(input('Enviar mensagem para servidor? [Y/N]')=="N"):
        break
    msg = bytes(input("Digite uma mensagem: "),encoding='utf8')
    client_socket.sendall(msg)
    print ("[Mensagem enviada]")
print("[Conexão encerrada!]")
client_socket.sendall(bytes('',encoding='utf8'))
client_socket.close() #fecha socket do cliente
