# Dockerfile

# --- ETAPA 1: Construcción (Build) ---
# Usamos una imagen oficial de Node.js para construir la app
FROM node:20-alpine AS build-stage

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el código fuente del proyecto
COPY . .

# Construimos la aplicación para producción
# Esto creará la carpeta /app/dist
RUN npm run build

# --- ETAPA 2: Producción (Serve) ---
# Usamos una imagen oficial y ligera de Nginx
FROM nginx:alpine AS production-stage

# Copiamos los archivos estáticos construidos en la Etapa 1
# desde la carpeta /app/dist del 'build-stage' al directorio web de Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copiamos nuestro archivo de configuración personalizado de Nginx
# Esto sobrescribirá el 'default.conf' de Nginx
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 80 (el que Nginx escucha por defecto)
EXPOSE 80

# El comando por defecto de la imagen de Nginx se encargará de iniciar el servidor