#!/bin/sh -l

echo "Hello $1"
echo "IP $2"
time=$(date)
echo "::set-output name=time::$time"
node index.js "$2"
