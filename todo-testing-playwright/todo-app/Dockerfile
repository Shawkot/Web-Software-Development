FROM denoland/deno:alpine-1.42.2

WORKDIR /app

COPY . .

EXPOSE 8000

CMD [ "run", "--allow-net", "--allow-read", "--unstable-kv", "--watch", "app-run.js" ]