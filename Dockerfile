FROM python:3.6-alpine3.6

ADD walle/ /walle
WORKDIR /walle
RUN ls
RUN pwd
RUN pip install -r requirements.txt
RUN pip install git+https://github.com/Pithikos/python-websocket-server
CMD ["sh", "run.sh"]
