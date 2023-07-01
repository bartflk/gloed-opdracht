# gloed opdracht
 opdracht voor gloed

## Gebruik

Volg deze stappen om de Docker-container te bouwen en uit te voeren:

1. Clone deze repository naar je lokale machine:

   ```bash
   git clone https://github.com/bartflk/gloed-opdracht.git
    ```

2. Open een terminal en navigeer naar de directory waar dit README-bestand en het `docker-compose.yml`-bestand zich bevinden.

3. Voer het volgende commando uit om de Docker-container te bouwen en uit te voeren:

   ```bash
   docker-compose up
   ```

Docker Compose zal nu de Docker-image bouwen op basis van de Dockerfile en de container starten. De poort 8080 in de container wordt gekoppeld aan poort 8080 op je lokale machine.

Open je webbrowser en ga naar http://127.0.0.1:8080/ om het statische HTML-bestand te bekijken dat wordt geserveerd.