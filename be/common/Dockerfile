FROM openjdk:17-slim

WORKDIR /app

COPY build/libs/common-0.0.1.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
