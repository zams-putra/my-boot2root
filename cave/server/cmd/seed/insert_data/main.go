package insertdata

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
	hashedPass, err := bcrypt.GenerateFromPassword([]byte("atminnihyh"), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec("INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)", "usernamenya", string(hashedPass), 1)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("New user inserted sucessfully user balu")
}
