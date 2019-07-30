FROM postgres:11.4-alpine

ENV POSTGRES_PASSWORD ''

ENV POSTGRES_DB fec

COPY ./seed.sql /docker-entrypoint-initdb.d/
