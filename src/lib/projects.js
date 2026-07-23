export const ICONS = {
  landing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18" stroke-linecap="round"/><rect x="6" y="12" width="7" height="5" rx="1"/></svg>',
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16" stroke-linecap="round"/></svg>',
  ecommerce: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 6h16l-1.5 10.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 6Z" stroke-linejoin="round"/><path d="M8 6V5a4 4 0 0 1 8 0v1" stroke-linecap="round"/></svg>',
  app: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 18h4" stroke-linecap="round"/></svg>',
  webapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4" stroke-linecap="round"/></svg>'
};

const WEBSITE_PAGES = ["Inicio","Nosotros","Servicios","Equipo","Blog / Noticias","Preguntas frecuentes","Contacto"];

export const PROJECT_TYPES = {
  landing: {
    label: "Landing Page",
    hint: "Una sola página enfocada en conversión",
    color: "#F2A33C",
    available: true,
    pageQuestion: "¿Qué secciones necesitas?",
    pageOptions: ["Hero / Portada","Sobre nosotros","Servicios","Testimonios","Preguntas frecuentes","Formulario de contacto","Ubicación / Mapa"]
  },
  website: {
    label: "Sitio Web",
    hint: "Varias páginas, presencia institucional",
    color: "#F2A33C",
    available: true,
    pageQuestion: "¿Qué páginas necesitas?",
    pageOptions: WEBSITE_PAGES
  },
  ecommerce: {
    label: "E-commerce",
    hint: "Venta de productos en línea",
    color: "#F2A33C",
    available: true,
    pageQuestion: "¿Qué páginas necesitas?",
    pageOptions: [...WEBSITE_PAGES, "Tienda","Cart","Checkout"],
    extraQuestions: [
      { id: "pasarela_pago", type: "toggle", label: "¿Implementación de pasarela de pago?", options: ["Sí","No"] }
    ]
  },
  app: { label: "App Móvil", hint: "iOS, Android o ambos", color: "#F2A33C", available: false },
  webapp: { label: "Web App", hint: "Sistema o herramienta a medida", color: "#F2A33C", available: false }
};

// Orden pensado para seguir el flujo natural de la conversación con el cliente:
// 1) qué trae el cliente (diseño) → 2) preferencia técnica → 3) infraestructura (dominio/hosting)
// → 4) requisitos funcionales → 5) legal/cumplimiento → 6) soporte post-entrega → 7) notas abiertas al final
export const COMMON_QUESTIONS = [
  { id: "disenos", type: "toggle", label: "¿Tienes el diseño de la(s) página(s)?", options: ["Sí","No"] },
  { id: "tecnologia", type: "select", label: "¿Has pensado en alguna tecnología?",
    options: ["Webflow","WordPress","Desarrollo a medida","No lo he pensado"] },
  { id: "dominio", type: "toggle", label: "¿Cuentas con dominio?", options: ["Sí","No"] },
  { id: "hosting", type: "toggle", label: "¿Cuentas con hosting?", options: ["Sí","No"] },
  { id: "administrable", type: "toggle", label: "¿Será administrable?", options: ["Sí","No"] },
  { id: "idiomas", type: "toggle", label: "¿Necesitas que esté en más de un idioma?", options: ["Sí","No"] },
  { id: "libro_reclamaciones", type: "toggle", label: "¿Necesitas Libro de Reclamaciones?", options: ["Sí","No"] },
  { id: "terminos_condiciones", type: "toggle", label: "¿Necesitas Términos y Condiciones?", options: ["Sí","No"] },
  { id: "despliegue", type: "toggle", label: "¿Necesitas ayuda con el despliegue del proyecto al finalizar?", options: ["Sí","No"] },
  { id: "especificaciones", type: "textarea", label: "Detalla más especificaciones que consideras importantes",
    placeholder: "Cuéntame cualquier detalle adicional que deba saber…" }
];

// tu-dominio.com/?id=<page_id_de_notion>
// Andrés crea la fila en "Proyectos" (Nombre + Cliente) antes de enviar el link;
// el tipo de proyecto SÍ lo elige el cliente aquí en el formulario (paso 1).
export const N8N_WEBHOOK_URL = "https://primary-production-b62f1.up.railway.app/webhook/brief-submit";
