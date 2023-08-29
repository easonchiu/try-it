docker:
	GOOS=linux GOARCH=amd64 go build -v -o ./app
	docker build --progress=plain --rm -f Dockerfile -t hello-docker:v1 .
