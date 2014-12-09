@echo off
pushd ..\tests
call npm install 
call bower install 
call grunt build 
popd
exit
