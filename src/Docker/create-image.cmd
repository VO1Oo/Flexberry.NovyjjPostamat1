docker build --no-cache -f SQL\Dockerfile.PostgreSql -t novyjj_postamat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t novyjj_postamat/app ../..
