@echo off
REM ============================================================
REM  Canhoto Fight - pre-visualizacao local
REM  Abre o site em http://localhost:8000 (o YouTube so funciona
REM  por http, nunca abrindo o arquivo direto / file://)
REM  Feche esta janela preta para parar o servidor.
REM ============================================================
cd /d "%~dp0"
start "" http://localhost:8000
python -m http.server 8000
