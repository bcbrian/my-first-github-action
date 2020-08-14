#!/bin/sh -l

echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"
hostip=$(ip route show | awk '/default/ {print $3}')
node index.js $hostip
