package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/bcrypt"
)

func main() {

	db, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	hashedPass, err := bcrypt.GenerateFromPassword([]byte("atmin_password_tak_tertebak"), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec("INSERT INTO users (username, password, role) VALUES (?, ?, ?)", "atmin_kyta", string(hashedPass), "admin")
	if err != nil {
		log.Fatal(err)
	}
	log.Println("New user inserted successfully dah ada user baru noh")

}
