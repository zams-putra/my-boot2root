package main

import (
	"log"
	"net/http"

	"github.com/zams-putra/my-boot2root/cave/cave/server/configs"
	"github.com/zams-putra/my-boot2root/cave/cave/server/internals/handlers"
)

func main() {

	cfg := configs.Load()
	db := configs.InitDB()
	defer db.Close()

	mux := http.NewServeMux()

	mux.HandleFunc("/test", handlers.TestingHandlers)

	log.Println("Run at http://127.0.0.1:8080")
	http.ListenAndServe(cfg.HttpAddr, mux)

}
