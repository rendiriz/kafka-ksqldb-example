FROM postgres:12

COPY postgresql.conf.sample /usr/share/postgresql/postgresql.conf.sample
COPY /docker-entrypoint-initdb.d /docker-entrypoint-initdb.d