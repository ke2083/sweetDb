@echo off
start /WAIT build-all
pushd ..\demo
start npm start
popd