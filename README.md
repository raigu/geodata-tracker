Location based data gathering and sharing platform.

# Development

```bash
$ cp .env.dev .env
$ cp front/js/envs.js.dev front/js/envs.js
$ docker-compose run --rm -u root --entrypoint "ash -c"  backend "cd /parse-server/cloud && npm ci"
$ docker-compose up -d
```

* Application: [http://127.0.0.1:8080](http://127.0.0.1:8080)
* Backend dashboard [http://127.0.0.1:4040](http://127.0.0.1:4040) user/password: neo/oen

# Technical overview 

Front end is a static HTML. It is store under [./front](./front) and served by docker service 'nginx'.

Backend is a [Parse Platform](https://docs.parseplatform.org). It is served by docker service 'backend'.
The files are stored in mongodb (docker service `mongodb`). There is also a backend dashboard which 
allows seeing inside backend platform. Backend related custom code is under [./cloud](./cloud).

