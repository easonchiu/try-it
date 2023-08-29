package main

import (
	"fmt"
	"net/http"
	"sync"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello Eason")
}

func main() {
	wail := new(sync.WaitGroup)
	wail.Add(100)

	go func() {
		http.HandleFunc("/", handler)
		http.ListenAndServe(":8080", nil)
	}()

	fmt.Println("start....")

	wail.Wait()
}
