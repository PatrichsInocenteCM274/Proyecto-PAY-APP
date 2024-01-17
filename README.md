# ✨ Proyecto-PAY-APP 🧾🏃‍♀️💳✨

Este proyecto incursionó en el uso de la pasarela de pagos Stripe, mediante el consumo de su Api Rest en modo test.

El sistema de archivos presentado en el repositorio es el siguiente:

- CODIGO FRONTED (Vue.js): /pinocentepayapp
- CÓDIGO BACKEND API SERVER (Express.js): /pinocentevpayapp_api_server

La infraestuctura del sistema es la siguiente:

![infra_pinocentepayapp](https://github.com/PatrichsInocenteCM274/Proyecto-PAY-APP/assets/30361234/591a23f6-fbef-4c8f-ab51-5315e810d5ce)

El diagrama secuencial del flujo principal es el siguiente:

![secuential_diagram](https://github.com/PatrichsInocenteCM274/Proyecto-PAY-APP/assets/30361234/5334d0cc-3702-446d-a045-c90c1de12d4b)

A continuación se muestra los metodos creados en el server api pinocentepayapp y tambien los que se usaron de Stripe:

![methods](https://github.com/PatrichsInocenteCM274/Proyecto-PAY-APP/assets/30361234/b8161efb-0b4e-437f-b34e-118019966084)

Finalmente se muestra las vistas creadas del fronted y su flujo:

![fronted](https://github.com/PatrichsInocenteCM274/Proyecto-PAY-APP/assets/30361234/28927908-bf64-4b3e-a983-bfe1b05014d6)

## Instrucciones de Uso (Probado en Ubuntu 20.04 en modo localhost):

Antes de seguir las instrucciones, asegurese de contar con la instalación de npm y tener una cuenta de clever Cloud y Stripe, sin ello no podrá tener acceso a todas las funcionalidades del app.

### 0. Clone el proyecto a su maquina local e ingrese al directorio del proyecto
~~~
git clone https://github.com/PatrichsInocenteCM274/Proyecto-PAY-APP.git
~~~

### 1. Creación de la bbdd en Clever Cloud
Dirijase a https://www.clever-cloud.com/product/mysql/ y cree una bbdd con mysql, luego de ello conectese de forma remota a la bbdd ingresando a una terminal de su
maquina. Para ello ejecute el siguiente comando (Puede obtener el comando en el addon dashboard de clever cloud en la opción MySQL CLI):
~~~
mysql -h xxxxxxxxxxxxxxx-mysql.services.clever-cloud.com -P 3306 -u xxxxxxxxxxxxx -p xxxxxxxxxxxxxxxxxxxxxxxxx
~~~
Luego usted estará dentro de la terminal de mysql que conecta a su base de datos, proceda entonces a crear la tabla transactions:
~~~
mysql> CREATE TABLE transactions(
    ->     id_transaction VARCHAR(100),
    ->     state_transaction VARCHAR(20),
    ->     time DATETIME);
~~~

Ahora, es necesario para que nuestra aplicación pueda conectarse a esta base de datos proporcionarle las creedenciales necesarias, por ello usted debe añadir 
sus propias credenciales en el archivo /pinocentevpayapp_api_server/.env, rellene los campos relacionados con las credenciales de su base de datos,
todas ellas las puede encontrar en su dashboard de clever cloud.

### 2. Configuraciones relacionadas a Stripe

Luego de crear una cuenta en Stripe, ingrese a dashboard --> desarrolladores --> Claves de Api, copie la clave secreta "sk_test_xxxxxxxx..." y rellene el campo "STRIPE_PRIVATE_KEY" dentro del archivo /pinocentevpayapp_api_server/.env

finalmente para que Stripe notifique a la aplicación los pagos correctos se usará webhook, herramienta de stripe que envia un request post al endpoint que se desee, debido a que 
se esta trabajando de forma local, es necesario instalar Stripe Cli, por ello siga los pasos mencionados en https://stripe.com/docs/stripe-cli y realice el login de stripe,
luego en una terminal ejecute el comando de redirección de webhooks a nuestro ambiente local, ejecutando:
~~~
stripe listen --forward-to localhost:5000/webhook
~~~
usted debe ver algo como respuesta:
~~~
> Ready! You are using Stripe API Version [2023-10-16]. Your webhook signing secret is whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (^C to quit)
~~~

sirvase a copiar la clave "whsec_xxxxxxxxxx..." y rellene el campo " ENDPOINT_SECRET" dentro del archivo /pinocentevpayapp_api_server/.env

A partir de aquí cuando iniciemos el backend de la aplicación (puerto 5000), Stripe podrá enviarle un post request al endpoint /webhook de forma local cada vez que un evento de pago se haya realizado.

### 2. Iniciando aplicación!
Si llego hasta aquí, lo unico que necesita es iniciar el fronted y el backend de la aplicación:

1. Iniciando el backend:
Dirijase a /pinocentevpayapp_api_server/ abra una terminal y ejecute los siguientes comandos:
~~~
npm install
npm run start
~~~

Ahora el  backend estará corriendo en el puerto 5000.

2. Iniciando el fronted:
Dirijase a /pinocentepayapp/ abra una terminal y ejecute los siguientes comandos:
~~~
npm install
npm run serve
~~~
Ahora el fronted estará corriendo en el puerto 8080.

3. Navegue a su navegador favorito y copie en la barra de direcciones http://localhost:8080/ , finalmente usted podrá ver la aplicación corriendo correctamente.

4. Si usted desea ver las transacciones que se han guardado hasta el momento en la base de datos, puede simplemente acceder a http://localhost:5000/get_transactions , esto le será muy util para poder dar monitorie al id de transacciones que se van generando y que puede usted ingresar una id_transaction en el form de las vistas SEARCH TRANSACTION y TRANSACTION HISTORICAL REPORT para extraer los datos y reportes de una transacción especifica.

### That's all, thanks for watching!
