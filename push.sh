docker build -t kanishka3000/product-fe ./Frontend
docker build -t kanishka3000/product-service ./ProductService

docker push kanishka3000/product-fe
docker push kanishka3000/product-service