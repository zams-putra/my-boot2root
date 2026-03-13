package models

import "time"

type Roasting struct {
	Id      int       `json:"id"`
	Roaster string    `json:"roaster"`
	Date    time.Time `json:"date"`
}
