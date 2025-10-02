# Seguridad de nuestro Repositorio

## Archivo .gitignore
Los logs son archivos generados automáticamente por el sistema o los gestores de paquetes (npm, yarn, pnpm, lerna). Los hemos añadido al .gitignore porque estos contienen mensajes de error o depuración,
no aportan nada al código fuente y pueden ocupar mucho espacio. Además, pueden variar en cada máquina, lo que genera "ruido" en el repositorio.

### 📂 logs

>logs  
*.log  
npm-debug.log*  
yarn-debug.log*  
yarn-error.log*  
pnpm-debug.log*
lerna-debug.log*

### 📂 node_modules
Contiene todas las librerías instaladas.  
Se generan a partir de `package.json` y `package-lock.json` o `yarn.lock`.  

**No se suben porque:**
- Son muy pesadas (miles de archivos).
- Se pueden volver a instalar con `npm install` o `yarn install`.

---

### 📂 dist / dist-ssr
Directorios de archivos ya compilados para producción.  

**Razón para excluirlos:**
- El código fuente es lo importante.
- La compilación se genera cada vez que ejecutes `npm run build`.

---

### 📄 *.local
Archivos de configuración local (ejemplo: `.env.local`).  

**Razón para excluirlos:**
- Suelen contener credenciales, tokens o configuraciones específicas de tu PC.
- No deberían compartirse por seguridad.

