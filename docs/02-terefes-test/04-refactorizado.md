# Refactorización

- Se han borrado los archivos `uart.h` y `uart.cpp` con el fin de utilizar la configuración más genérica `Serial` provista por la plataforma.

```bash
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [==        ]  23.6% (used 965 bytes from 4096 bytes)
Flash: [=         ]  10.5% (used 13608 bytes from 130048 bytes)
```

- Se han eliminado los tipos `volatile` que no estaban siendo usados y se cambiaron las declaraciones de los `#define` presentes en el archivo de `comandos.h`:

```bash
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [==        ]  23.6% (used 965 bytes from 4096 bytes)
Flash: [=         ]   9.2% (used 12016 bytes from 130048 bytes)
```
