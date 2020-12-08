# GoGuardian
An app built on Docker and Node.js with the goal of letting students control GoGuardian on their device

## Features
### IP Address Spoofing
The current release allows you to spoof your IP address to the GoGuardian extension through the web interface. GoGuardian Admin users don't need your IP address.

## Installation for Chromebook
This runs on Linux, so the easiest way to run the app off of one computer would be to use the Linux beta on your Chromebook. This method also ensures your ability to use this app anywhere you take your computer.
### Steps
**1.** Install Docker & Git
```bash
$ sudo apt install docker.io docker-compose git
```
**2.** Download  
If you've already downloaded, you can skip this step.
```bash
$ git clone https://github.com/mswider/Goguardian.git
```
**3.** Build the Docker containers  
This step builds and prepares the Docker containers for more speedy starts in the future
```bash
$ cd ~/Goguardian
$ sudo docker-compose build
```
**4.** Configure Linux Port Forwarding  
Configure your port forwarding settings to look like this:  
![port forwarding example][port-forwarding]

## Using GoGuardian Control
#### First, run this command to start the servers:
```bash
$ cd ~/Goguardian
$ sudo docker-compose up
```
It is important that you do not close the terminal window, or this will kill the servers.
#### Next, connect your Chromebook to the local proxy server
The server should be running on the host 127.0.0.1 using port 8080 for all protocols.
#### Finally, install the proxy certificate
Generally, this won't need to be done except for your first time connecting.  
Go to *[mitm.it](http://mitm.it)* and you should be presented with a certificate download page. If not, you probably aren't connected to the proxy.  
The correct certificate can be downloaded by selecting "other."  
Once the certificate is downloaded, trust it as an Authority in Chrome settings.
#### Once you're done, navigate to *[localhost:3000](http://localhost:3000)* and have fun!
If you need to quit the app servers, press *Ctrl + C* in the terminal window.

[port-forwarding]: images/port-forwarding.png
