import socket

pag = open('CampoMinado/campo-minado.html', 'r')
homepage = pag.read()

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

sock.bind(('', 8000))
sock.listen(1)

print('Aguardando conexão!')

while True:
    conn, addr = sock.accept()
    info = conn.recv(3000)

    print(info)

    L = info.split(b' ')

    if L[0] == b'GET':
        if L[1] == b'/':
            resp = 'HTTP/1.1 200 0K\r\nContent-Type: text/html\r\n\r\n\r\n'\
                    + homepage

            resp = str.encode(resp)
            conn.sendall(resp)
        elif L[1] == b'/style.css':
            pagcss = open('CampoMinado/style.css', 'r')
            css = pagcss.read()

            resp = 'HTTP/1.1 200 0K\r\nContent-Type: text/css\r\n\r\n\r\n' \
                   + css

            resp = str.encode(resp)
            conn.sendall(resp)
        elif L[1] == b'/out/production/CampoMinado/CampoMinado.js': #chamando o js....
            kt = open('CampoMinado/style.css', 'r').read()
            lib = open('CampoMinado/out/production/CampoMinado/lib/kotlin.js', 'r').read() #dando erro!!

            resp = 'HTTP/1.1 200 0K\r\nContent-Type: text/kt\r\n\r\n\r\n' \
                   + kt

            resp1 = 'HTTP/1.1 200 0K\r\nContent-Type: text/kt\r\n\r\n\r\n' + lib #erro

            resp = str.encode(resp)
            resp1 = str.encode(lib) #erro
            conn.sendall(resp)
            conn.sendall(resp1) #erro
    conn.close()

sock.close()
