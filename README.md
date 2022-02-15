# imgbin

Inspired by @kennethreitz' [httpbin.org](https://httpbin.org), but for images.

This is a very simple utility that listens on port 80, and generates a PNG image
with a dump of the request headers as text in the image.

This may be useful for debugging complex scenarios with image transformation services
like Akamai Image Manager, or in general with intermediate proxies.