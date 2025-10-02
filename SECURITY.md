# Seguridad de nuestro Repositorio
No dejar vulnerabilidades en nuestros repositorios es muy importante tanto ocultar la información sensible de nuestro pc como evitar subir ficheros innecesarios y pesados a nuestros repositorios es fun-
damental para un buen proyecto. Un método eficiente para lograrlo es usando .gitignore.

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

---

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

---

### 📝 Archivos de editores y sistema

- `.vscode/*`: configuraciones personales de VS Code.  
  - **Excepción:** `extensions.json` sí puede compartirse.  
- `.idea`: configuraciones de JetBrains (personales).  
- `.DS_Store`: archivo oculto de macOS (innecesario).  
- `*.suo, *.ntvs*, *.njsproj, *.sln`: archivos de proyectos de Visual Studio (no aportan al código).  
- `*.sw?`: archivos temporales creados por editores como Vim. 


## Recuperación del repositorio en caso de pérdida.

### 1. Respaldo y seguridad de GitHub
- Copias redundantes en múltiples servidores.
- Snapshots y backups automáticos.
- Alta disponibilidad en caso de fallos.

### 2. Recuperación desde copias locales
- Git es distribuido: cada `git clone` tiene el **historial completo**.
- Si GitHub falla, se puede restaurar con:
  ```bash
  git remote set-url origin git@github.com:usuario/repositorio-nuevo.git
  git push --mirror origin


