# PlatformIO

Programando en Microchip Studio:

```bash
Task "RunOutputFileVerifyTask"
  Program Memory Usage 	:	20306 bytes   15.5 % Full
  Data Memory Usage 		:	224 bytes   5.5 % Full
  Warning: Memory Usage estimation may not be accurate if there are sections other than .text sections in ELF file
```

Migrando el código a PlatformIO (sólo refactorizando el código - sin optimización):

```bash
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [==        ]  19.3% (used 790 bytes from 4096 bytes)
Flash: [=         ]   9.9% (used 12932 bytes from 130048 bytes)
```

Para el caso de la migración de Microchip Studio a PlatformIO, se tiene un incremento en el uso de memoria RAM que pasa del $5.5 \%$ al $19.3 \%$, esto es en gran medida debido al hecho de que muchas variables que estaban incluidas como locales dentro de la función `main()` pasaron a ser globales, pues esta función en el nuevo modelo que se usa en PlatformIO desaparece y se cambia por `loop()`, la cual implícitamente se ejecuta en un bucle infinito; esto haría que las variables se crearan cada vez que se restablece el bucle, ocasionando más carga al microcontrolador y retrasando el procesamiento del código posterior.

La parte más interesante es la reducción del $15.5 \%$ al $9.9 \%$ del uso de la memoria _Flash_, lo cual se traduce en que el código ocupa 7,374 bytes menos, siendo esto una reducción del $36.13 \%$.

En conclusión, mientras que el aumento en el uso de la memoria RAM era un valor que podía esperarse y sigue siendo bajo, en términos de uso de memoria Flash se ve una gran mejoría en la optimización del código.

El siguiente paso de la migración corresponde a realizar una nueva refactorización del código y mejorar las funciones implementadas.
