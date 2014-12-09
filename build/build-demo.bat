@echo off
pushd ..\demo
call npm install 
call bower install 
call grunt build 
popd
exit