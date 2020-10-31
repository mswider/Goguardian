FROM ubuntu:focal

WORKDIR /proxy

COPY . .

RUN apt update

RUN [ "apt", "upgrade", "-y" ]

RUN [ "apt", "install", "mitmproxy", "-y" ]

CMD [ "mitmdump", "-s", "./redirect.py", "--no-http2" ]

EXPOSE 8080
