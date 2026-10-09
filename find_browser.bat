@echo off
set OUT=%~dp0browser_paths.txt
echo Searching browser locations... > "%OUT%"

for %%P in (
  "C:\Program Files\Google\Chrome\Application\chrome.exe"
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
  "C:\Users\fayyaz\AppData\Local\Google\Chrome\Application\chrome.exe"
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
  "C:\Windows\explorer.exe"
) do (
  if exist "%%~P" (
    echo FOUND: "%%~P" >> "%OUT%"
  ) else (
    echo NOT FOUND: "%%~P" >> "%OUT%"
  )
)
type "%OUT%"
