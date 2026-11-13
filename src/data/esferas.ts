// Fuente única de las esferas: nombre, frase, color y posición en la red de la portada.
// La "categoria" de cada artículo debe coincidir con el "nombre" de una esfera para aparecer en su página.
export interface Esfera {
  id: string; slug: string; nombre: string; frase: string; tono: string;
  x: number; y: number; r: number; pos: 'arriba' | 'abajo' | 'izquierda' | 'derecha';
}

export const esferas: Esfera[] = [
  { id: 'pensamiento', slug: 'pensamiento', nombre: 'Pensamiento', tono: '#7d8cff', x: 34, y: 17, r: 1.0, pos: 'arriba',
    frase: 'Marco analítico para interpretar instituciones, conflicto cotidiano y cambio social.' },
  { id: 'datos', slug: 'data-vinci', nombre: 'Data Vinci', tono: '#3dc8e0', x: 72, y: 19, r: 1.05, pos: 'arriba',
    frase: 'Evidencia y modelamiento para decisiones estratégicas en sector público y privado.' },
  { id: 'escritura', slug: 'escritura', nombre: 'Escritura', tono: '#6fa8ff', x: 13, y: 46, r: 0.95, pos: 'izquierda',
    frase: 'Escribe aquí la frase de esta esfera.' },
  { id: 'liderazgo', slug: 'liderazgo', nombre: 'Liderazgo', tono: '#9d7bff', x: 86, y: 47, r: 0.95, pos: 'derecha',
    frase: 'Herramientas de conducción para decidir y actuar en contextos inciertos.' },
  { id: 'docencia', slug: 'docencia', nombre: 'Docencia', tono: '#4b9bff', x: 28, y: 72, r: 1.05, pos: 'abajo',
    frase: 'Formación en ingeniería de software orientada al modelamiento de problemas complejos.' },
  { id: 'musica', slug: 'musica', nombre: 'Música', tono: '#b05cff', x: 75, y: 75, r: 1.0, pos: 'abajo',
    frase: 'Cuentos y música. Porque algunos sistemas solo se entienden desde adentro.' },
];

// El núcleo de la red: Álvaro, el origen del que salen todas las esferas.
// No tiene página de esfera propia: lleva a "Sobre mí".
export const nucleo = {
  id: 'alvaro', nombre: 'Álvaro', iniciales: 'ÁI', href: '/acerca/', tono: '#ffcf7a',
  x: 50, y: 45, r: 1.2, pos: 'abajo' as const,
  frase: 'El origen de cada esfera.',
};

const normalizar = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
export const esferaDe = (categoria: string) => esferas.find((e) => normalizar(e.nombre) === normalizar(categoria));
