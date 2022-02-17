# imgbin

Inspired by @kennethreitz' [httpbin.org](https://httpbin.org), but for images.

This is a very simple utility that listens on port 80 (by default), and generates a PNG image
with a dump of the request headers as text in the image.

This may be useful for debugging complex scenarios with image transformation services
like Akamai Image Manager, or in general with intermediate proxies.

## Usage

```
IMGBIN_PORT=8080 node index.js
```

Or using Docker:

```
docker run -p 8080:80 -d --name imgbin ynohat/imgbin
```