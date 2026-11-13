# alvaroinostroza.com

Sitio personal de Álvaro Inostroza, hecho con Astro y publicado en Cloudflare.

## Trabajar en tu computador
```powershell
npm install
npm run dev        # http://localhost:4321
npm run build      # genera la carpeta dist
```

## Dónde está cada cosa
| Qué | Archivo |
|---|---|
| Menú, colores y fondo | `src/layouts/Base.astro` |
| Portada | `src/pages/index.astro` |
| Esferas (nombres, frases, colores, posiciones) | `src/data/esferas.ts` |
| Animación de las esferas | `src/components/RedEsferas.astro` |
| Tarjetas de artículos | `src/components/Tarjeta.astro` |
| Artículos | `src/content/blog/*.md` |
| Imágenes (foto, portadas) | `public/` |
| Dominio del sitio | `astro.config.mjs` |
| Configuración de Cloudflare | `wrangler.jsonc` |

## Publicar
Cada `git push` a la rama `main` publica el sitio automáticamente en Cloudflare.
