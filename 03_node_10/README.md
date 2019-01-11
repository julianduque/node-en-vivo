# Node 10

Blog Post: https://nodesource.com/blog/what-s-new-to-lts-with-the-introduction-of-node-js-10-lts/

## HTTP/2

### Generate keys

```
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj
'/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```

### Video

https://www.youtube.com/watch?v=QfgdzYoKZH0