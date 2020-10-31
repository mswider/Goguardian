from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_host == "ip.goguardian.com":
        flow.request.host = "127.0.0.1"
        flow.request.port = 3000
        flow.request.scheme = "http"
