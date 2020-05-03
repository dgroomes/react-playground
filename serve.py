import http.server as hs

# Using Python 3's built in HTTP server. Read about it at https://docs.python.org/3/library/http.server.html

PORT = 8080
BIND_ADDRESS = '127.0.0.1'

Handler = hs.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.webapp': 'application/x-web-app-manifest+json',
})

with hs.HTTPServer((BIND_ADDRESS, PORT), Handler) as httpd:
    print("Serving react-playground at http://%s:%s !" % (BIND_ADDRESS, PORT))
    httpd.serve_forever()