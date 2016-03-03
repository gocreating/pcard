# Pcard

[![Build Status](https://travis-ci.org/gocreating/pcard.svg?branch=master)](https://travis-ci.org/gocreating/pcard)
[![Code Climate](https://codeclimate.com/github/gocreating/pcard/badges/gpa.svg)](https://codeclimate.com/github/gocreating/pcard)
[![Dependency Status](https://david-dm.org/gocreating/pcard.svg)](https://david-dm.org/gocreating/pcard)

## Demo

<https://profile-card.herokuapp.com/>

## Installation

```
npm install -g gulp
npm install -g jscs
npm install
```

## Build

```
gulp
```

## Test

```
npm test
```

## Run

Run in development environment:
```
gulp serve
```

Run in production environment:
```
npm start
```

## Deploy to Heroku

```
mkdir .deploy
cp ./config/Procfile .deploy/
cp ./package.json .deploy/
cp -r ./build .deploy/
cd .deploy
git init
git add . -A
git commit -m "Deploy"
heroku create
git push heroku master
cd ..
rm -rf .deploy
```