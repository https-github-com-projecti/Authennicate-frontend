docker build -t docker-react .
docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 4200:3000 --name="react-Authen" --rm -d docker-react
docker ps -a
