#!/bin/zsh
# Script para probar la web localmente con Vite y abrir el navegador automáticamente

# Eliminar node_modules y package-lock.json si existe error de Vite
if [ ! -d "node_modules/vite" ] || [ ! -f "node_modules/vite/dist/node/cli.js" ]; then
  echo "Corrigiendo instalación de dependencias (Vite corrupto o ausente)..."
  rm -rf node_modules package-lock.json
  npm install
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
  echo "Instalando dependencias..."
  npm install
fi

# Mensaje de ayuda para cortar el servidor
trap 'echo "\nServidor detenido. Puedes cerrar esta terminal."' INT

echo "\n[INFO] Para detener el servidor pulsa Ctrl+C."

# Iniciar el servidor de desarrollo de Vite en segundo plano
npm run dev &
VITE_PID=$!

# Esperar a que el servidor arranque (mejor espera activa)
for i in {1..10}; do
  sleep 1
  if nc -z localhost 5173; then
    break
  fi
  if [ $i -eq 10 ]; then
    echo "No se pudo iniciar el servidor de Vite en el puerto 5173."
    kill $VITE_PID 2>/dev/null
    exit 1
  fi
  echo "Esperando a que arranque Vite... ($i)"
done

# Abrir la web en el navegador por defecto
open http://localhost:5173

# Esperar a que el usuario cierre el script
wait $VITE_PID
