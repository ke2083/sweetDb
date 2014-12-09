@echo off
pushd ..\src
call npm install 
call grunt build 
popd
exit