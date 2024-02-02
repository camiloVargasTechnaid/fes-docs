# Migración

Durante la transferencia de los dispositivos y el *software*, se han detectado algunas necesidades y cambios necesarios que afectan diferentes partes del sistema. En este momento se hablará de los cambios que son oportunos aplicar en el tema del *software*, estas modificaciones se realizan buscando que se garantice la calidad del sistema, las mejoras continuas y el registro adecuado del versionamiento del mismo.

Una de las formas para hacer esto se basa en la necesidad de actualizar el sistema a los productos y versiones actuales del proveedor del microcontrolador, así como también considerar la migración desde la plataforma propietaria hacia un sistema más diverso y sin límites del propietario. Dicho esto, lo que se busca es hacer una primera migración del código de Atmel Studio hacia [Microchip Studio](https://www.microchip.com/en-us/tools-resources/develop/microchip-studio) y de allí considerar su migración hacia [PlatformIO](https://docs.platformio.org/en/latest/what-is-platformio.html), el cual es un IDE open-source[^1] desarrollado para trabajar desde una terminal de comandos o complemento en [Visual Studio Code](https://code.visualstudio.com/).

## De Atmel Studio a Microchip Studio

> "*Atmel Corporation* fue una compañía creadora y fabricante de semiconductores antes de ser adquirida por *Microchip Technology* en 2016."
> [Atmel - Wikipedia](https://en.wikipedia.org/wiki/Atmel)

Además de que la empresa ya no existe, el microcontrolador ATMega128 que actualmente integra la plataforma TEREFES del CSIC fue programado usando el IDE Atmel Studio, el cual también cambió de nombre a partir de la versión 7.0.2542[^2] integrando un nuevo sistema de librerías **MPLAB® XC8 Compiler (MPLAB XC8)** que pretenden remplazar la usadas por Atmel y su cadena de herramientes para microcontroladores **AVR® 8-bit GNU Toolchain (AVR-GCC)**.

## PlatformIO

> "PlatformIO es una herramienta profesional independiente de la plataforma, de arquitectura agnóstica, de marco de trabajo múltiple para sistemas embebidos y para desarrolladores de *software* que escriben aplicaciones para productos embedidos." [What is PlatformIO](https://docs.platformio.org/en/latest/what-is-platformio.html)

Como tal, PlatformIO brinda la facildad de desarrollar soluciones en más de una plataforma espacífica (Microchip - Atmel, Texas Instruments, Espressif, Intel, Linux ARM, Nordic, Raspberry Pi, ST, RISC-V, entre otros). Además de eso, al tener una arquitectura descentralizada, PlatformIO ofrece una ruta de integración para desarrollar productos listos para comercializar y reduce el tiempo general de comercialización.

De este modo, este IDE nos permite programar cualquier tipo de microcontrolador, incluyendo el ATMega128 usado actualmente y además nos permite considerar otros circuitos integrados sin la necesidad de pensar en aprender un nuevo marco de trabajo, un nuevo *sofware* que se deba instalar o si dicho programa puede usarse en Widnows, Linux o Mac.

Por consiguiente, PlatformIO es una plataforma interesante que nos puede brindar muchas ventajas durante el desarrollo del proyecto y en futuras implementaciones de otras ramas de trabajo en nuevos proyectos, haciendo que la curva de aprendizaje se disminuya y se reduzcan los tiempos de desarrollo de productos.

## Pasos a seguir 

Una vez teniendo esta información, se definen los pasos que se quieren seguir frente a estas dos opciones de trabajo: Microchip Studio y PlatformIO:

1. Migrar el código legado actual del TEREFES (versión 13.0, código clave TEREFESv5_6_2) desde Atmel Studio hacia Microchip Studio, creando la versión 14.0 código clave genérico terefes.
   1. Implementar las nuevas librerías para microcontroladores provistas por MPLAB XC8 siguiendo la guía de migración de Microchip: [AVR® GNU Toolchain to MPLAB® XC8 Migration Guide](https://ww1.microchip.com/downloads/aemDocuments/documents/DEV/ProductDocuments/ReferenceManuals/AVR-GNU-Toolchain-to-MPLAB-XC8-Migration-Guide-50003431.pdf).
   2. Tomar nota del cambio en el tamaño de código del sistema y de las librerías que son eliminadas o cambiadas.
2. Migrar el código de la versión 14.0 desde Atmel Studio hacia PlatformIO, creando la versión 15.0 de terefes y eliminando la necesidad de emplear el IDE propietario cambiando a un sistema *open source*[^1].


[^1]: Definición de *Open Source* por la Open Source Initiative (en inglés): [https://opensource.org/osd/](https://opensource.org/osd/).
[^2]: Notas de lanzamiento de Microchip Studio, versión en inglés (pág. 3): [https://ww1.microchip.com/downloads/aemDocuments/documents/DEV/ProductDocuments/SoftwareTools/Microchip-Studio-Release-Notes-DS50002917.pdf](https://ww1.microchip.com/downloads/aemDocuments/documents/DEV/ProductDocuments/SoftwareTools/Microchip-Studio-Release-Notes-DS50002917.pdf).
