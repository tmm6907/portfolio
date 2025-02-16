package api

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func (h Handler) GetRoutes(c echo.Context) error {
	return c.String(http.StatusOK, "get routes api page")
}
