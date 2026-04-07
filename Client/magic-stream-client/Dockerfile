# Imagen base: Node.js versión 20 sobre Alpine Linux (imagen ligera y minimalista)
FROM node:20-alpine

# Establece /app como directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala 'gettext', que provee el comando 'envsubst' para sustituir
# variables de entorno en archivos de texto (como env.template.js)
# --no-cache evita guardar el índice del repositorio, reduciendo el tamaño de la imagen
#RUN apk --no-cache add gettext

# Copia solo el package.json primero para aprovechar el cache de Docker:
# si las dependencias no cambian, Docker reutiliza esta capa en builds posteriores
COPY package*.json ./

# Instala las dependencias definidas en package.json
RUN npm install

# Copia el resto del código fuente al contenedor
# (se hace después de npm install para no invalidar el cache innecesariamente)
COPY . .

# Documenta que la aplicación escucha en el puerto 5173 (puerto por defecto de Vite)
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
# Comando de inicio del contenedor:
# 1. envsubst lee env.template.js, reemplaza las variables de entorno y genera env.js
# 2. Luego arranca el servidor de desarrollo de Vite con --host para que sea
#    accesible desde fuera del contenedor (no solo desde localhost)
#CMD sh -c "envsubst < public/env.template.js > public/env.js && npm run dev -- --host"
