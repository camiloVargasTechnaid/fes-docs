# Microchip

- Usando la librería actual `avr/io.h`:

```bash
Task "RunOutputFileVerifyTask"
  Program Memory Usage 	:	20306 bytes   15.5 % Full
  Data Memory Usage 		:	224 bytes   5.5 % Full
  Warning: Memory Usage estimation may not be accurate if there are sections other than .text sections in ELF file
```

- Usando la nueva librería `xc.h`:

```bash
Task "RunOutputFileVerifyTask"
  Program Memory Usage 	:	20306 bytes   15.5 % Full
  Data Memory Usage 		:	224 bytes   5.5 % Full
  Warning: Memory Usage estimation may not be accurate if there are sections other than .text sections in ELF file
```

Actualmente, el cambio de librerías no tendría ningún impacto al nivel de uso de memoria, pero se deben considerar que algunas funciones han cambiado o dejan de estar implementadas.

:::warning[Advertencia]

Tener en cuenta, al momento de modificar o agregar nuevo código, los cambios en la librería estándar universal de Microchip (ver [Librerías modificadas](#librerías-modificadas)).

:::

## Librerías modificadas

Según la guía de migración de [AVR® GNU Toolchain to MPLAB® XC8 Migration Guide](https://ww1.microchip.com/downloads/aemDocuments/documents/DEV/ProductDocuments/ReferenceManuals/AVR-GNU-Toolchain-to-MPLAB-XC8-Migration-Guide-50003431.pdf), las funciones presentes en la librería AVR que están parcialmente o no implementadas en la nueva librería estándar universal de Microchip son [^1]:

| Funciones                                                                                                                           | Archivo _header_ |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| dtostre(), dtostrf()                                                                                                                | `<stdlib.h>`     |
| getenv()                                                                                                                            | `<stdlib.h>`     |
| itoa()                                                                                                                              | `<stdlib.h>`     |
| random(), srandom()                                                                                                                 | `<stdlib.h>`     |
| system()                                                                                                                            | `<stdlib.h>`     |
| utoa(), ultoa()                                                                                                                     | `<stdlib.h>`     |
| strcasecmp(), strlwr(), strupr(), strncasecmp(), strrev()                                                                           | `<stdlib.h>`     |
| ffs(), ffsl(), ffsll()                                                                                                              | `<string.h>`     |
| square()                                                                                                                            | `<math.h>`       |
| mk_gmtime(), sun_rise(), sun_set(), solar_noon()                                                                                    | `<time.h>`       |
| gmtime_r(), localtime_r()                                                                                                           | `<time.h>`       |
| asctime_r(), ctime_r(), isotime(), isotime_r()                                                                                      | `<time.h>`       |
| set_dst(), set_zone(), set_system_time(), system_tick(), set_position()                                                             | `<time.h>`       |
| is_leap_year(), month_length(), week_of_year(), month_of_year(), fatfs_time(), equation_of_time(), daylight_seconds(), moon_phase() | `<time.h>`       |
| iso_week_date(), iso_week_date_r()                                                                                                  | `<time.h>`       |
| solar_declination(), gm_sideral(), lm_sideral()                                                                                     | `<time.h>`       |

[^1]: AVR® GNU Toolchain to MPLAB® XC8 Migration Guide (pág. 12): [https://ww1.microchip.com/downloads/aemDocuments/documents/DEV/ProductDocuments/ReferenceManuals/AVR-GNU-Toolchain-to-MPLAB-XC8-Migration-Guide-50003431.pdf](https://ww1.microchip.com/downloads/aemDocuments/documents/DEV/ProductDocuments/ReferenceManuals/AVR-GNU-Toolchain-to-MPLAB-XC8-Migration-Guide-50003431.pdf).
