FROM python:3.7

EXPOSE 5000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE 1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED 1

RUN mkdir /paymentworks

WORKDIR /paymentworks
ADD . /paymentworks/
RUN pip install -r requirements.txt