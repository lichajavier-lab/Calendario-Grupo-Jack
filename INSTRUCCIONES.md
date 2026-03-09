# 📋 Guía de despliegue — Grupo Jack Calendario

## Lo que vas a necesitar
- Cuenta en Supabase (ya la tenés ✓)
- Cuenta en Vercel (ya la tenés ✓)
- Cuenta en GitHub (para subir el código)

---

## PASO 1 — Configurar Supabase (5 min)

1. Entrá a https://supabase.com y abrí tu proyecto
   (Si no creaste un proyecto todavía: New Project → dale un nombre → elegí región "South America")

2. En el menú izquierdo → **SQL Editor** → **New query**

3. Copiá TODO el contenido del archivo `supabase_setup.sql` y pegalo ahí → **Run**
   Vas a ver: "Success. No rows returned" — eso está perfecto.

4. Ahora buscá tus credenciales:
   Menú izquierdo → **Settings** → **API**
   - Copiá el campo **Project URL** (algo como https://abcdefgh.supabase.co)
   - Copiá el campo **anon / public** key (texto largo que empieza con eyJ...)

---

## PASO 2 — Subir el código a GitHub (5 min)

1. Entrá a https://github.com → **New repository**
   - Nombre: `grupojack-calendario`
   - Privado o público (cualquiera funciona)
   - **Create repository**

2. Descargá la carpeta `grupojack` que te pasamos

3. En la página de tu repositorio vacío, hacé clic en **"uploading an existing file"**

4. Arrastrá TODOS los archivos de la carpeta `grupojack` al área de upload
   (Importante: subí los archivos, no la carpeta en sí)

5. Escribí un mensaje como "Primera versión" → **Commit changes**

---

## PASO 3 — Configurar variables de entorno en Vercel (3 min)

1. Entrá a https://vercel.com → **Add New Project**

2. Conectá tu repositorio de GitHub (`grupojack-calendario`)

3. Antes de hacer deploy, hacé clic en **"Environment Variables"** y agregá:

   | Name | Value |
   |------|-------|
   | VITE_SUPABASE_URL | (tu Project URL de Supabase) |
   | VITE_SUPABASE_ANON_KEY | (tu anon key de Supabase) |

4. Hacé clic en **Deploy**

5. En 2-3 minutos Vercel te va a dar una URL como:
   `https://grupojack-calendario.vercel.app`

---

## PASO 4 — Compartir con el equipo

Simplemente mandales la URL por WhatsApp o email.
- No necesitan crear cuenta
- No necesitan instalar nada
- Funciona en celular y computadora
- Los cambios que hace uno los ven todos al instante ⚡

---

## ¿Cómo actualizar el contenido en el futuro?

Si querés cambiar el código, simplemente reemplazá los archivos en GitHub
y Vercel va a actualizar el sitio automáticamente en 1-2 minutos.

---

## ¿Problemas?

- **La página no carga**: revisá que las variables de entorno en Vercel estén bien copiadas
- **No se guardan los datos**: revisá que el SQL se ejecutó correctamente en Supabase
- **Error de conexión**: asegurate de que el Project URL no tenga una barra "/" al final
