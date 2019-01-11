### Video

https://www.youtube.com/watch?v=ws_BtdSnZ04

### Build

```
docker build -t my-docker .
```

### Run

With docker:
```
docker run -p 9999:9999 my-docker
```

With docker-compose
```
docker-compose up
```

With a different port:
```
docker run -p 8000:8000 -e PORT=8000 my-docker
```
