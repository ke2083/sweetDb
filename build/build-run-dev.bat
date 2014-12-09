@echo off
start /WAIT build-src
start build-run-demo
pushd ..\src
start grunt-devtools
popd