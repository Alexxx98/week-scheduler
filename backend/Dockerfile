FROM python:3.12.2-alpine

WORKDIR /app

COPY . .

RUN pip install requirements.txt

EXPOSE 8082

ENTRYPOINT [ "sh", "entrypoint.sh" ]
