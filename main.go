package main

import (
	"runtime"
	"time"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
)

type DebugInfo struct {
	GoVersion      string `json:"go_version"`
	RuntimeOS      string `json:"runtime_os"`
	RuntimeArch    string `json:"runtime_arch"`
	ProjectVersion string `json:"project_version"`
	Uptime         string `json:"uptime"`
}

type APIResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty"`
}

func NewSuccessResponse(message string, data interface{}) APIResponse {
	return APIResponse{
		Success: true,
		Message: message,
		Data:    data,
	}
}

func NewErrorResponse(err error, message string) APIResponse {
	return APIResponse{
		Success: false,
		Message: message,
		Error:   err.Error(),
	}
}

var startTime = time.Now()

func main() {
	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	app.Get("/", func(c *fiber.Ctx) error {
		uptime := time.Since(startTime).Round(time.Second)

		debugInfo := DebugInfo{
			GoVersion:      runtime.Version(),
			RuntimeOS:      runtime.GOOS,
			RuntimeArch:    runtime.GOARCH,
			ProjectVersion: "1.0.0",
			Uptime:         uptime.String(),
		}

		return c.Status(fiber.StatusOK).JSON(NewSuccessResponse("JMGCoding API", debugInfo))
	})

	app.Listen(":3001")
}
