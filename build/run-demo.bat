@echo off
call build-all
pushd ..\demo
start npm start
popd