# Parámetros y Configuración

El dispositivo acepta comunicacón serial sobre USB al igual que un conjunto de comandos de configuración. La sintaxis de estos comandos es siempre la misma:

- Letras en minúscula para acceder al menú de comandos.
- Letras en mayúsuculas para verificar o cambiar los parámetros.
<!-- - number + uppercase to change I2C connected devices -->

:::info
La información de los menús  y parámetros del sistema están especificados en inglés con el fin de estandarizar todos los sistemas y hacerlos compatibles con la mayor cantidad de entornos.
:::

## Menú

Todos los dispositivos incluyen los siguientes comandos: `h` para ayuda, `s` para configuración y `u` para utilidades. Por favor, note que el comando debe ser seguido de un retorno de carro `CR`, nueva línea `LF` o una combinación de estos `CR+LF`.

Por ejemplo, usando el **TechStim** y escribiendo sobre el puerto serial la letra `h` se obtendrá el siguiente menú:

```
(h)elp
(l)og
(s)ettings
(u)tilities
```

## Identificación del producto

Cada dispositivo está identificado por un ID. El ID puede ser verificado enviando en la interfaz serial el comando `uq` o puede ser configurado con el comando seguido del ID deseado, como por ejemplo `uq21313`.

El ID es un número entre $-32768$ y $32767$ (16 bits). Los primeros 8 bits indican el tipo de dispositivo, mientras que los últimos 8 bits es un identificador único en caso de que se dispongan de muchos dispositivos conectados al mismo computador.

Actualmente, se han definido los siguientes dispositivos:

| ASCII decimal | Letter | Kind     |
| ------------- | ------ | -------- |
| 83 (0x53)     | S      | TechStim |

Toda la información respecto a estos dispositivos está disponible en:

<!-- TODO: -->
<!-- [Device information](https://github.com/Hackuarium/legoino-device-information) -->

Pra lograr configruar el ID del dispositivo es necesario multiplicar el tipo de dispositivo por 256 y sumarle el ID único que está entre 0 y 255. Se recomienda que el código resultante pueda representarse como texto ASCII.

```text
Dec Hex    Dec Hex    Dec Hex  Dec Hex  Dec Hex  Dec Hex   Dec Hex   Dec Hex
  0 00 NUL  16 10 DLE  32 20    48 30 0  64 40 @  80 50 P   96 60 `  112 70 p
  1 01 SOH  17 11 DC1  33 21 !  49 31 1  65 41 A  81 51 Q   97 61 a  113 71 q
  2 02 STX  18 12 DC2  34 22 "  50 32 2  66 42 B  82 52 R   98 62 b  114 72 r
  3 03 ETX  19 13 DC3  35 23 #  51 33 3  67 43 C  83 53 S   99 63 c  115 73 s
  4 04 EOT  20 14 DC4  36 24 $  52 34 4  68 44 D  84 54 T  100 64 d  116 74 t
  5 05 ENQ  21 15 NAK  37 25 %  53 35 5  69 45 E  85 55 U  101 65 e  117 75 u
  6 06 ACK  22 16 SYN  38 26 &  54 36 6  70 46 F  86 56 V  102 66 f  118 76 v
  7 07 BEL  23 17 ETB  39 27 '  55 37 7  71 47 G  87 57 W  103 67 g  119 77 w
  8 08 BS   24 18 CAN  40 28 (  56 38 8  72 48 H  88 58 X  104 68 h  120 78 x
  9 09 HT   25 19 EM   41 29 )  57 39 9  73 49 I  89 59 Y  105 69 i  121 79 y
 10 0A LF   26 1A SUB  42 2A *  58 3A :  74 4A J  90 5A Z  106 6A j  122 7A z
 11 0B VT   27 1B ESC  43 2B +  59 3B ;  75 4B K  91 5B [  107 6B k  123 7B {
 12 0C FF   28 1C FS   44 2C ,  60 3C <  76 4C L  92 5C \  108 6C l  124 7C |
 13 0D CR   29 1D GS   45 2D -  61 3D =  77 4D M  93 5D ]  109 6D m  125 7D }
 14 0E SO   30 1E RS   46 2E .  62 3E >  78 4E N  94 5E ^  110 6E n  126 7E ~
 15 0F SI   31 1F US   47 2F /  63 3F ?  79 4F O  95 5F _  111 6F o  127 7F DEL
```

## Parámetros

El dispositivo contiene un arreglo de parámetros y estos pueden ser de lectura/escritura `R/W` o solo de lectura `R`. Todos los parámetros son números entre $-32768$ y $32767$ (internamente almacenados en un arreglo de variables tipo *int16*). Los parámetros pueden ser verificados y cambiados usando la letras en mayúsculas que corresponden al índice del arreglo. Por ejemplo, `A` para el índice `0`, `B` para el índice `1`, etc.

:::note
Algunos parámetros están limitados en cuanto al valor que pueden tener, esto con el fin de evitar accidentes o configuraciones que puedan causar comportamientos no especificados por el dispositivo.
:::

Actualmente, se cuenta con más de 68 parámetros. Después de usar las 26 letras del alfabeto [A-Z], se usan códigos de dos letras como AA, AB, ..., hasta llegar a BP.

| Letra | Índice Correspondiente |
| ----- | ---------------------- |
| A     | 0                      |
| B     | 1                      |
| C     | 2                      |
| ...   | ...                    |
| AA    | 26                     |
| AB    | 27                     |
| ...   | ...                    |
| BA    | 52                     |
| ...   | ...                    |

Al enviar `s`ettings for the **TechStim** se obtiene una lista como esta:

```bash
0- A: 10
1- B: 10
2- C: 500
3- D: 500
4- E: 20
5- F: 20
6- G: 200
...
18- S: 60
19- T: 40
20- U: 23
21- V: 15
...
```

Aquí la `T` es para el umbral motor del canal 1, el cual está limitado entre 0-80 mA.

### Verificando parámetros

Para especificar un parámetro específico basta con enviar por la interfaz serial la letra en mayúscula que corresponde al parámetro seguido de `ENTER`.

### Cambiando un parámetro

Para cambiar un parámetro simplemente basta con ingresar la letra en mayúscula correspondiente seguida del nuevo valor. Por ejemplo, `AB123` configurará el nuevo valor del parámetro `AB` (parámetro 27) a $123$.

### Cambiando múltiples parámetros al mismo tiempo

Al ingresar una letra en mayúscula seguida de valores separados por coma (sin espacio) se cambiarán los parámetros de forma consecutiva. Por ejemplo, `B1,2,3` configurará `B` a $1$, `C` a $2$ y `D` a $3$.

:::warning
Por favor, tenga precaución ya que hay un límite para la contidad de caracteres que puede enviar. Para dispositivos usando un microcontrolador de 8-bits como un ATMEGA, la longitud permitida es 32 bytes, y para microcontroladores de 32-bit como los STM32 es de 64 bytes.
:::

## Conectando el dispositivo desde el navegador web

Es posible comunicarse con los dispositiovs usando Serial sobre USB en navegadores como Chorium y Edge. Todos los dispositivos que aceptan esta característica experimental pueden ser probados aquí:

<!-- TODO: -->
<!-- [Local devices](https://hackuarium.github.io/bioreactor-ui/preferences/local-devices) -->
