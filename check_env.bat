@echo off
set OUT=%~dp0server_check.txt
echo Checking runtimes > "%OUT%"
where node >> "%OUT%" 2>&1
where python >> "%OUT%" 2>&1
where py >> "%OUT%" 2>&1
where chrome >> "%OUT%" 2>&1
where msedge >> "%OUT%" 2>&1
type "%OUT%"
