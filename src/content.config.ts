import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    // Ensayo, Columna, Cuento, Canción, Clase...
    categoria: z.string(),
    etiquetas: z.array(z.string()).default([]),
    // Si se publicó en otro medio: nombre del medio y enlace externo
    medio: z.string().optional(),
    enlace: z.string().url().optional(),
    // Imagen de portada: ruta dentro de public, por ejemplo /portadas/crimen.jpg
    imagen: z.string().optional(),
    proximamente: z.boolean().default(false),
    // Para ocultar un post sin borrarlo
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
