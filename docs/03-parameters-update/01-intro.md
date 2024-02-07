# Nuevos parámetros

:::note[Nota]

Todas las variables que se presentarán a continuación son del tipo enteros positivos de 16 bits (`uint16_t`).

:::

| ID  | Parámetro | Nombre                  | Valor por defecto | Rango típico | Unidades | Descripción                           |
| --- | --------- | ----------------------- | ----------------- | ------------ | -------- | ------------------------------------- |
| 0   | A         | PARAM_POS_AMP_1         | 0                 | 0 - 80       | mA       | Amplitud positiva (canal 1)           |
| 1   | B         | PARAM_NEG_AMP_1         | 0                 | 0 - 80       | mA       | Amplitud negativa (canal 1)           |
| 2   | C         | PARAM_POS_TIME_1        | 2                 | 2 - 1000     | μs       | Periodo positivo (canal 1)            |
| 3   | D         | PARAM_NEG_TIME_1        | 2                 | 2 - 1000     | μs       | Periodo negativo (canal 1)            |
| 4   | E         | PARAM_POS_AMP_2         | 0                 | 0 - 80       | mA       | Amplitud positiva (canal 2)           |
| 5   | F         | PARAM_NEG_AMP_2         | 0                 | 0 - 80       | mA       | Amplitud negativa (canal 2)           |
| 6   | G         | PARAM_POS_TIME_2        | 2                 | 2 - 1000     | μs       | Periodo positivo (canal 2)            |
| 7   | H         | PARAM_NEG_TIME_2        | 2                 | 2 - 1000     | μs       | Periodo negativo (canal 2)            |
| 8   | I         | PARAM_POS_AMP_3         | 0                 | 0 - 80       | mA       | Amplitud positiva (canal 3)           |
| 9   | J         | PARAM_NEG_AMP_3         | 0                 | 0 - 80       | mA       | Amplitud negativa (canal 3)           |
| 10  | K         | PARAM_POS_TIME_3        | 2                 | 2 - 1000     | μs       | Periodo positivo (canal 3)            |
| 11  | L         | PARAM_NEG_TIME_3        | 2                 | 2 - 1000     | μs       | Periodo negativo (canal 3)            |
| 12  | M         | PARAM_POS_AMP_4         | 0                 | 0 - 80       | mA       | Amplitud positiva (canal 4)           |
| 13  | N         | PARAM_NEG_AMP_4         | 0                 | 0 - 80       | mA       | Amplitud negativa (canal 4)           |
| 14  | O         | PARAM_POS_TIME_4        | 2                 | 2 - 1000     | μs       | Periodo positivo (canal 4)            |
| 15  | P         | PARAM_NEG_TIME_4        | 2                 | 2 - 1000     | μs       | Periodo negativo (canal 4)            |
| 16  | Q         | PARAM_ORDER_CHANNELS    | 228 (0x00E4)      | N/A          | N/A      | Orden de activación de los canales.   |
| 17  | R         | PARAM_REPETITIONS       | 1                 | 0-3          | N/A      | Número de repeticiones de los canales |
| 18  | S         | PARAM_INV_PULSE         | 0 (0x0000)        | 0-1          | N/A      | Inversión de los canales              |
| 19  | T         | PARAM_UMBRRAL_MOTOR_1   | 0                 | 0 - 80       | mA       | Umbral motor (canal 1)                |
| 20  | U         | PARAM_UMBRRAL_MOTOR_2   | 0                 | 0 - 80       | mA       | Umbral motor (canal 2)                |
| 21  | V         | PARAM_UMBRRAL_MOTOR_3   | 0                 | 0 - 80       | mA       | Umbral motor (canal 3)                |
| 22  | W         | PARAM_UMBRRAL_MOTOR_4   | 0                 | 0 - 80       | mA       | Umbral motor (canal 4)                |
| 23  | X         | PARAM_UMBRRAL_COMFORT_1 | 0                 | 0 - 80       | mA       | Umbral confort (canal 1)              |
| 24  | Y         | PARAM_UMBRRAL_COMFORT_2 | 0                 | 0 - 80       | mA       | Umbral confort (canal 2)              |
| 25  | Z         | PARAM_UMBRRAL_COMFORT_3 | 0                 | 0 - 80       | mA       | Umbral confort (canal 3)              |
| 26  | AA        | PARAM_UMBRRAL_COMFORT_4 | 0                 | 0 - 80       | mA       | Umbral confort (canal 4)              |
| 27  | AB        | PARAM_MIN_CURRENT_1     | 0                 | 0 - 80       | mA       | Corriente mínima (canal 1)            |
| 28  | AC        | PARAM_MIN_CURRENT_2     | 0                 | 0 - 80       | mA       | Corriente mínima (canal 2)            |
| 29  | AD        | PARAM_MIN_CURRENT_3     | 0                 | 0 - 80       | mA       | Corriente mínima (canal 3)            |
| 30  | AE        | PARAM_MIN_CURRENT_4     | 0                 | 0 - 80       | mA       | Corriente mínima (canal 4)            |
| 31  | AF        | PARAM_MAX_CURRENT_1     | 0                 | 0 - 80       | mA       | Corriente máxima (canal 1)            |
| 32  | AG        | PARAM_MAX_CURRENT_2     | 0                 | 0 - 80       | mA       | Corriente máxima (canal 2)            |
| 33  | AH        | PARAM_MAX_CURRENT_3     | 0                 | 0 - 80       | mA       | Corriente máxima (canal 3)            |
| 34  | AI        | PARAM_MAX_CURRENT_4     | 0                 | 0 - 80       | mA       | Corriente máxima (canal 4)            |
| 35  | AJ        | PARAM_INTRA_FREQ        | 1                 | 1 - 120      | Hz       | Frecuencia intragrupo                 |
| 36  | AK        | PARAM_GROUP_FREQ        | 1                 | 1 - 120      | Hz       | Frecuencia de grupo                   |
| 37  | AL        | PARAM_RAMPA_SUBIDA      | 0                 | 0 - 500      | Hz       | Rampa de subida                       |
| 38  | AM        | PARAM_RAMPA_BAJADA      | 0                 | 0 - 500      | Hz       | Rampa de bajada                       |

Respecto a los parámetros de amplitudes, periodos y frecuencias de los canales, estos valores se pueden almacenar indicando el número dentro del valor típico mencionado, de lo contrario, el valor enviado se ubicará en el valor extremo más cercano y se indicará a través de un mensaje de error en el sistema.

## Otros parámetros

| ID  | Parámetro | Nombre                  | Valor por defecto | Rango típico | Unidades | Descripción                                              |
| --- | --------- | ----------------------- | ----------------- | ------------ | -------- | -------------------------------------------------------- |
| 49  | AX        | PARAM_ERROR             | 0                 | N/A          | N/A      | Errores del sistema                                      |
| 50  | AY        | PARAM_STATUS            | N/A               | N/A          | N/A      | Estado de las funciones del sistema                      |
| 51  | AZ        | PARAM_ENABLED           | 1 (0x0001)        | N/A          | N/A      | Funciones habilitadas por el usuario                     |
| 58  | BG        | PARAM_MODO_ESTIMULACION | 0                 | 0 - 1        | N/A      | Modo de estimulación del sistema: Simétrico o asimétrico |
| 59  | BH        | PARAM_FIRMWARE_VERSION  | N/A               | N/A          | N/A      | Versión del firmware del sistema.[^1]                    |

De todo este conjunto de parámetros, hay algunos como `PARAM_ORDER_CHANNELS`, `PARAM_REPETITIONS`, `PARAM_INV_PULSE` y los inlcuidos en [Otros parámetros](#otros-parámetros) que son representaciones binarias del dato a ingresar; cada uno de estos se describirá a continuación:

### PARAM_ORDER_CHANNELS

Esta variables toma los primeros 8 bits para indicar el orden de cada uno de los canales, de modo que: los primeros 2 bits indican la posición del canal 1 en el tren de pulsos; el segundo par de bits indican la posición del segundo canal; el tercer par de bits corresponden al tercer canal y, el cuarto par para el canal 4.

Como se tienen 2 bits por canal, esto significa que cada canal puede tener 4 opciones de posición: 00: primero; 01: segundo; 10: tercero y, 11: cuarto.

:::warning[Advertencia]

En caso de que dos o más canales se activen en la misma posición, solamente se activará uno de estos canales, actualmente, se activaría el primer canal que tenga el turno en orden ascendente de los bits de `PARAM_ORDER_CHANNELS`

:::

Un ejemplo de configuración es el valor por defecto del parámetro, el cual organiza cada canal en el mismo orden de su valor: canal 1: primero; canal 2: segundo; canal 3: tercero y, canal 4: cuarto. Otra opción es la forma invertida, siendo el canal 1 el último en activarse y el canal 4 el primero de todos. De este modo, la variable `PARAM_ORDER_CHANNELS` tendría los siguientes posibles valores:

- Orden de aparición de bits: CH4=44, CH3=33, CH2=22, CH1=11; todos los valores deben ser `0` ó `1` según su posición.
- `PARAM_ORDER_CHANNELS` = 0b0000000044332211; todos los valores deben ser `0` ó `1` según su posición.

:::tip

El valor a enviar al dispositivo corresponde a su valor en decimal.

:::

| Orden       | Posiciones                             | Valor binario        | Valor hexadecimal | Valor decimal |
| ----------- | -------------------------------------- | -------------------- | ----------------- | ------------- |
| Ascendente  | CH4:4=11, CH3:3=10, CH2:2=01, CH1:1=00 | `0b0000000011100100` | `0x00E4`          | `228`         |
| Descendente | CH1:4=11, CH2:3=10, CH3:2=01, CH4:1=00 | `0b0000000000011011` | `0x0033`          | `27`          |

:::danger[Peligro]

Asegúrese de enviar el valor en decimal. En caso de enviar el valor en formato binario o hexadecimal, es posible que el comportamiento del sistema sea impredecible.

:::

### PARAM_REPETITIONS

La configuración de este parámetro es similar a [PARAM_ORDER_CHANNELS](#param_order_channels), pero en este caso, el valor en cada posición de canal corresponde al número de veces que se repetirá durante 1 periodo de grupo.

:::tip

Para conocer un poco más respecto a la configuración de los bits del parámetro, puede dar un vistazo a los ejemplos en [PARAM_ORDER_CHANNELS](#param_order_channels).

:::

El rango de opciones se encuentra entre 0 repeticiones y 3 repeticiones:

| Repeticiones | Posiciones                             | Valor binario        | Valor hexadecimal | Valor decimal |
| ------------ | -------------------------------------- | -------------------- | ----------------- | ------------- |
| Una          | CH4:4=01, CH3:3=01, CH2:2=01, CH1:1=01 | `0b0000000001010101` | `0x0055`          | `85`          |
| Variada      | CH1:4=11, CH2:3=10, CH3:2=11, CH4:1=01 | `0b0000000011101101` | `0x00ED`          | `237`         |

:::info[Información]

En caso de que el número de repeticiones seleccionado sea mayor a `3` o no sea posible hacer la repetición debido a que el periodo de grupo es muy pequeño, su valor será ajustado al número de repetición más cercano posible.

:::

:::danger[Peligro]

Asegúrese de enviar el valor en decimal. En caso de enviar el valor en formato binario o hexadecimal, es posible que el comportamiento del sistema sea impredecible.

:::

### PARAM_INV_PULSE

La configuración de este parámetro es similar a [PARAM_ORDER_CHANNELS](#param_order_channels), pero en este caso, el valor en cada posición indica si el canal tiene la señal invertida.

:::note[Nota]

A diferencia de `PARAM_ORDER_CHANNELS` y `PARAM_REPETITIONS` que tienen 3 opciones para cada canal, este parámetro sólo admite `0` y `1` pero usa los mismo 2 bits para cada uno de ellos.

:::

:::warning[Advertencia]

En caso de que el par de bits correspondan a un valor a `0` ó `1`, se tomará el **valor por defecto** del parámetro para cada uno de los canales que tenga dicho error.

:::

:::tip

- `0`: Indica que el canal no está invertido.
- `1`: Indica que el canal está invertido.

:::

:::tip

Para conocer un poco más respecto a la configuración de los bits del parámetro, puede dar un vistazo a los ejemplos en [PARAM_ORDER_CHANNELS](#param_order_channels).

:::

| Inversión             | Posiciones                             | Valor binario        | Valor hexadecimal | Valor decimal |
| --------------------- | -------------------------------------- | -------------------- | ----------------- | ------------- |
| Inversión intercalada | CH4:4=01, CH3:3=00, CH2:2=01, CH1:1=00 | `0b0000000001000100` | `0x0044`          | `68`          |
| Variado               | CH1:4=01, CH2:3=01, CH3:2=01, CH4:1=00 | `0b0000000001010100` | `0x0054`          | `84`          |

:::danger[Peligro]

Asegúrese de enviar el valor en decimal. En caso de enviar el valor en formato binario o hexadecimal, es posible que el comportamiento del sistema sea impredecible.

:::

[^1]: La versión actual del sistema corresponde a: v0.0.1.
