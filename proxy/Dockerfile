FROM ubuntu:focal

WORKDIR /proxy

COPY . .

RUN apt update

RUN [ "apt", "upgrade", "-y" ]

RUN [ "apt", "install", "mitmproxy", "-y" ]

RUN [ "mkdir", "certs" ]

RUN [ "cp", "certkey.pem", "certs/mitmproxy-ca.pem" ]

RUN [ "cp", "cert.pem", "certs/mitmproxy-ca-cert.pem" ]

CMD [ "mitmdump", "-s", "./redirect.py", "--no-http2", "--set", "confdir=./certs" ]

EXPOSE 8080
