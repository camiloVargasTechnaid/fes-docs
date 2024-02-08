# Máquina de Estados

Recordando los parámetros que aún faltan por definir:

| ID  | Parámetro | Nombre                  | Valor por defecto | Rango típico | Unidades | Descripción                                              |
| --- | --------- | ----------------------- | ----------------- | ------------ | -------- | -------------------------------------------------------- |
| 49  | AX        | PARAM_ERROR             | 0                 | N/A          | N/A      | Errores del sistema                                      |
| 50  | AY        | PARAM_STATUS            | N/A               | N/A          | N/A      | Estado de las funciones del sistema                      |
| 51  | AZ        | PARAM_ENABLED           | 1 (0x0001)        | N/A          | N/A      | Funciones habilitadas por el usuario                     |
| 58  | BG        | PARAM_MODO_ESTIMULACION | 0                 | 0 - 1        | N/A      | Modo de estimulación del sistema: Simétrico o asimétrico |
| 59  | BH        | PARAM_FIRMWARE_VERSION  | N/A               | N/A          | N/A      | Versión del firmware del sistema.                        |

De esta tabla hay 3 variables importantes que manejan la máquina de estados del sistema:

- `PARAM_ENABLED`: Habilita las funciones del sistema.
- `PARAM_STATUS`: Indica el estado de las funciones del sistema.
- `PARAM_ERROR`: Muestra si existe algún error en el sistema.

:::info[Información]
El parámetro `PARAM_ENABLED` (`AZ`) permite activar o desactivar algunas funciones del sistema, por ejemplo, deshabilitar el canal 1 mientras se mantienen activos los demás canales.
:::

### PARAM_ENABLED

:::info[Información]
`PARAM_ENABLED` es un valor de lectura y escritura [R/W].
:::

`PARAM_ENABLED` (`AZ`) permite habilitar o deshabilitar algunas funcionalidades del sistema, estas características pueden ser controladas a través de banderas que se asocian a este parámetro. Actualmente, se pueden activar individualmente cada canal y, a su vez, activar la estimulación.

| Bit | PARAM_ENABLED            | Comentario                      |
| --- | ------------------------ | ------------------------------- |
| 0   | FLAG_CHANNEL_1           | Habilitar/deshabilitar canal 1  |
| 1   | FLAG_CHANNEL_2           | Habilitar/deshabilitar canal 2  |
| 2   | FLAG_CHANNEL_3           | Habilitar/deshabilitar canal 3  |
| 3   | FLAG_CHANNEL_4           | Habilitar/deshabilitar canal 4  |
| 4   | FLAG_STIMULATION_CONTROL | Activar/desactivar estimulación |
| 5   | FLAG_RAMP_CONTROL        | Activar/desactivar rampas       |

:::warning[Advertencia]
`FLAG_RAMP_CONTROL` aún no se encuentra implementada.
:::

En este caso, cada bandera corresponde a un único bit, el cual según su valor, indica si se habilita o desahibilita algún canal, mientras que `FLAG_STIMULATION_CONTROL` indica además si se desea activar la estimulación en los canales que estén habilitados.

:::note[Nota]

- `0`: Indica que la bandera se encuentra deshabilitada.
- `1`: Indica que la bandera se encuentra habilitada/activada y por lo tanto el canal o la estimulación.

:::

:::warning[Advertencia]
Mientras que la bandera `FLAG_STIMULATION_CONTROL` se encuentre desactivada, ninguno de los canales habilitados estará en funcionamiento.
:::

| Habilitación                        | Posiciones                                                                                    | Valor binario        | Valor hexadecimal | Valor decimal |
| ----------------------------------- | --------------------------------------------------------------------------------------------- | -------------------- | ----------------- | ------------- |
| Canal 1 y 3, estimulación           | Bit4=1 (estimulación), Bit3=0 (canal 4), Bit2=1 (canal 3), Bit1=0 (canal 2), Bit0=1 (canal 1) | `0b0000000000010101` | `0x0015`          | `21`          |
| Todos los canales, sin estimulación | Bit4=0 (estimulación), Bit3=1 (canal 4), Bit2=1 (canal 3), Bit1=1 (canal 2), Bit0=1 (canal 1) | `0b0000000000001111` | `0x000F`          | `15`          |

:::tip
Si se desean activar todos los canales, el valor de `PARAM_ENABLED` debe ser `31`.
:::

:::danger[Peligro]

Asegúrese de enviar el valor en decimal. En caso de enviar el valor en formato binario o hexadecimal, es posible que el comportamiento del sistema sea impredecible.

:::

### PARAM_STATUS

:::info[Información]
`PARAM_ENABLED` es un valor de sólo lectura [R].
:::

`PARAM_STATUS` (`Z`) indica los canales actualmente activos. Se compone, al igual que [PARAM_ENABLED](#param_enabled), de diferentes bits/banderas, los cuales son activadas directamente por el sistema, haciendo que este parámetro sea el que indique si efectivamente el canal está en funcionamiento.

:::tip
Procure usar `PARAM_STATUS` y `PARAM_ENABLED` en conjunto para identificar si todo está configurado correctamente, ya que en muchas ocasiones puede pasar que se habliten los canales pero estos no posean el estado de activados, lo cual puede ser un indicativo de que algo puede estar sin configurar o existe algún error en el sistema.
:::

| Bit | PARAM_STATUS   | Comentario              |
| --- | -------------- | ----------------------- |
| 0   | FLAG_CHANNEL_1 | Activo/inactivo canal 1 |
| 1   | FLAG_CHANNEL_2 | Activo/inactivo canal 2 |
| 2   | FLAG_CHANNEL_3 | Activo/inactivo canal 3 |
| 3   | FLAG_CHANNEL_4 | Activo/inactivo canal 4 |

| Activación        | Posiciones                                                             | Valor binario        | Valor hexadecimal | Valor decimal |
| ----------------- | ---------------------------------------------------------------------- | -------------------- | ----------------- | ------------- |
| Canal 1 y 3       | Bit3=0 (canal 4), Bit2=1 (canal 3), Bit1=0 (canal 2), Bit0=1 (canal 1) | `0b0000000000000101` | `0x0005`          | `5`           |
| Todos los canales | Bit3=1 (canal 4), Bit2=1 (canal 3), Bit1=1 (canal 2), Bit0=1 (canal 1) | `0b0000000000001111` | `0x000F`          | `15`          |

:::danger[Peligro]
`PARAM_STATUS` es el indicador principal de que todos los canales están funcionando correctamente, asegúrese de no manipularlos manualmente.
:::

### PARAM_ERROR

:::info[Información]
`PARAM_ENABLED` es un valor de sólo lectura [R].
:::

:::danger[Peligro]
Aún no se han definido las banderas de este parámetro.
:::

`PARAM_ERROR` `Y` indica cualquier error del sistema, para verificar el tipo de error presente se puede revisar la siguiente tabla:

| BIT | PARAM_ERROR                  | COMMENT                                                    |
| --- | ---------------------------- | ---------------------------------------------------------- |
| 0   | FLAG_TEMP_PCB_PROBE_ERROR    | Pcb probe failed (one wire not answering)                  |
| 1   | FLAG_TEMP_EXT1_PROBE_ERROR   | Liquid probe in the top failed (one wire not answering)    |
| 2   | FLAG_TEMP_EXT2_PROBE_ERROR   | Liquid probe in the bottom failed (one wire not answering) |
| 3   | FLAG_TEMP_PCB_RANGE_ERROR    | Temperature of pcb is out of range range                   |
| 4   | FLAG_TEMP_EXT1_RANGE_ERROR   | Temperature of liquid in the top is out of range           |
| 5   | FLAG_TEMP_EXT2_RANGE_ERROR   | Temperature of liquid in the bottom is out of range        |
| 6   | FLAG_TEMP_TARGET_RANGE_ERROR | Target temperature is out of range                         |
| 7   | FLAG_WEIGHT_RANGE_ERROR      | Weight is out of range                                     |

:::tip
Procure mantener esta información siempre a mano, nunca se sabe cuando pueda ser bastante útil.
:::
