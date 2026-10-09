@echo off
rundll32.exe url.dll,FileProtocolHandler "%~dp0index.html"
explorer.exe "%~dp0index.html"
start "" "%~dp0index.html"
