#!/bin/zsh
# Script para desplegar automáticamente a gh-pages desde macOS

# Salir si hay un error
set -e

# Limpiar dependencias y reinstalar siempre antes de build
rm -rf node_modules package-lock.json
echo "Instalando dependencias frescas..."
npm install

# Construir el proyecto
npm run build

# Guardar la rama actual
git_branch=$(git rev-parse --abbrev-ref HEAD)

echo "Cambiando a rama gh-pages..."
git checkout gh-pages

echo "Eliminando archivos antiguos..."
git rm -rf . > /dev/null 2>&1 || true

# Copiar contenido de dist al root
cp -r dist/* .

# Eliminar la carpeta dist
echo "Limpiando archivos temporales..."
rm -rf dist

# Añadir y hacer commit
git add .
git commit -m "Deploy automático a GitHub Pages" || echo "Sin cambios para commitear."
git push origin gh-pages --force

echo "Volviendo a la rama original: $git_branch"
git checkout $git_branch

echo "¡Despliegue completado!"
