@echo off
start /WAIT build-all
pushd ..\tests
start npm start
popd
