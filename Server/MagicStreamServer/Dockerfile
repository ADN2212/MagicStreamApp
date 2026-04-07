# Usa una imagen base ligera de Go (Alpine) con la versión 1.24.2
FROM golang:1.24.2-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias primero (mejora el cache de Docker)
COPY go.mod go.sum ./

# Descarga las dependencias del proyecto
RUN go mod download

# Copia el resto del código fuente al contenedor
COPY . .

# Expone el puerto 8080 (informativo, no lo abre automáticamente)
EXPOSE 8080

# Comando por defecto: ejecuta la aplicación Go
CMD [ "go", "run", "main.go" ]