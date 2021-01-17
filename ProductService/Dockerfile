FROM openjdk:15

RUN mkdir /app
COPY target/ProductQueryService-0.0.1-SNAPSHOT.jar /app

ENV TZ="Asia/Colombo"

WORKDIR /app

CMD ["java", "-jar", "ProductQueryService-0.0.1-SNAPSHOT.jar"]