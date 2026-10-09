@echo off
start chrome "%~dp0index.html" 2>nul || start "" "%~dp0index.html"
