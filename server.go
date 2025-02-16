package main

import (
	"os"

	"github.com/labstack/echo/v4"
	"github.com/tmm6907/webdev/api"
)

func main() {
	server := echo.New()
	// server.GET("/", func(c echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello World!")
	// })

	server.Static("/", "frontend/build")

	apiRoutes := server.Group("/api")
	h := &api.Handler{}
	apiRoutes.GET("/routes", h.GetRoutes)

	port := os.Getenv("PORT")
	if port == "" {
		// log.Fatalln("failed to load server. port not set.")
		port = ":8080"
	}
	server.Logger.Fatal(server.Start(port))
}
