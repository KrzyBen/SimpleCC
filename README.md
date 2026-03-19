# Caesar Cipher Tool

Aplicación de escritorio para **cifrar y descifrar texto usando el cifrado César**.
Desarrollada como proyecto personal mientras estudiaba Ingeniería en Computación e Informática.

---

## Características

* Cifrado y descifrado de texto
* Soporte para desplazamientos positivos y negativos
* Actualización automática al mover el slider
* Límite de 500 caracteres
* Interfaz simple y rápida
* Aplicación de escritorio (Electron)

---

## Captura de la aplicación

![Vista de la aplicación](assets/Vista%20Previa%201.png)

## Resultado del cifrado y descifrado

![Resultado cifrado](assets/Resultado%201.png)
![Resultado descifrado](assets/Resultado%202.png)

---

## Instalación

Descargar el instalador desde la sección **Releases** del repositorio:

1. Descargar el archivo `.exe`
2. Ejecutar el instalador
3. Seguir los pasos del asistente
4. Abrir la aplicación desde el menú inicio o acceso directo

---

## Uso

1. Escribir el texto que deseas cifrar o descifrar.
2. Seleccionar el modo:

   * Encrypt
   * Decrypt
3. Ajustar el valor de **Shift** con el slider.
4. El resultado aparecerá automáticamente.

---

## Tecnologías utilizadas

* Electron
* Node.js
* JavaScript
* HTML / CSS

---

## Estructura del proyecto

```
caesar-desktop-app
│
├─ assets
├─ core
│   └─ cipher.js
├─ main
├─ preload
├─ renderer
├─ package.json
└─ README.md
```

---

## Ejecutar el proyecto en desarrollo

Instalar dependencias:

```
npm install
```

Ejecutar la aplicación:

```
npm start
```

Construir instalador:

```
npm run build
```

---

## Autor

**Benjamín Manríquez R.**

Hecha mientras era estudiante de la
**Universidad del Bío-Bío**