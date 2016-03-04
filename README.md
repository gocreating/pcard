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

For the first time:
```
rm -rf .deploy
mkdir .deploy
cp ./config/Procfile .deploy/
cp ./package.json .deploy/
cp -r ./build .deploy/
cd .deploy
git init
git add . -A
git commit -m "Deploy"
heroku create # heroku git:remote -a profile-card
git push heroku master -f
cd ..

```

For the following time:
```
cd .deploy
rm -f ./package.json
rm -rf ./build
cp ../package.json ./
cp -r ../build ./
git add . -A
git commit -m "Deploy upgrade"
git push heroku master
cd ..

```