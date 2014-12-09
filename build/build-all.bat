@echo off
pushd ..\demo
call npm install 
call bower install 
call grunt build 
popd
pushd ..\src
call npm install 
call grunt build 
popd