docker run -v $(pwd)/Frontend:/app -w /app node:10 /bin/bash -c "npm install ; npm run build"
docker run -v $(pwd)/ProductService:/app -w /app -v ~/.m2:/root/.m2 -it maven:3.6.3-openjdk-15 mvn -P compose clean compile package -DskipTests