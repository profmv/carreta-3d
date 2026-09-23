@echo off
title Carreta 3D - app do curso
cd /d "%~dp0"

rem Tenta subir um servidor local. Com ele, o navegador guarda os resultados
rem sem reclamar. Se nao houver Python na maquina, abre o arquivo direto.

where python >nul 2>nul
if %errorlevel%==0 (
  start "Servidor Carreta 3D - nao feche" /min cmd /c python -m http.server 8731 --bind 127.0.0.1
  goto abrir
)

where py >nul 2>nul
if %errorlevel%==0 (
  start "Servidor Carreta 3D - nao feche" /min cmd /c py -m http.server 8731 --bind 127.0.0.1
  goto abrir
)

echo.
echo Nao encontrei Python nesta maquina. Abrindo o app direto do arquivo.
echo Se o app avisar que nao esta guardando resultados, use outro computador
echo ou copie a pasta para o disco local antes de abrir.
echo.
start "" "index.html"
exit /b

:abrir
timeout /t 2 /nobreak >nul
start "" http://localhost:8731/index.html
echo.
echo O app esta aberto no navegador.
echo A janela minimizada chamada "Servidor Carreta 3D" precisa ficar aberta
echo ate o fim da aula. Feche ela quando terminar.
echo.
exit /b
