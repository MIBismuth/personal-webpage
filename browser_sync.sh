#!/bin/zsh

npx browser-sync start --proxy "http://127.0.0.1:8080" --files "./website/**/*.html" &

