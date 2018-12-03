#!/bin/sh
mkdir $1 && \
    cp template/day.ts $1/day$1.ts && \
    cp template/day.test.ts $1/day$1.test.ts