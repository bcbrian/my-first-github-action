#!/bin/sh -l

echo "Hello $1"
echo "IP $2"
time=$(date)
echo "::set-output name=time::$time"
npm i
node index.js "$2"
