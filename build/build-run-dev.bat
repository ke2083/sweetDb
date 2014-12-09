@echo off
start /WAIT build-src
start build-run-tests
pushd ..\src
start grunt-devtools
popd
