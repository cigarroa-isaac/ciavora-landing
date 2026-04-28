export type Locale = "es" | "en";

export const dictionary = {
  es: {
    nav: {
      links: {
        servicios: "Servicios",
        proceso: "Proceso",
        industrias: "Industrias",
      },
      cta: "Hablemos",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      localeAria: "Idioma",
    },

    hero: {
      eyebrow: "Desarrollo de software a medida",
      titleLine1: "Tu operación en digital.",
      titleLine2: "En semanas, no años.",
      subtitle:
        "Construimos el sistema exacto que tu negocio necesita — porque conocemos tu industria antes de escribir la primera línea de código.",
      ctaPrimary: "Platícanos tu reto",
      ctaSecondary: "Ver cómo trabajamos",
    },

    valueProp: {
      heading: "Lo que nos hace diferentes",
      cards: [
        {
          title: "Entendemos antes que otros",
          description:
            "Mapeamos cómo opera tu negocio hoy — no cómo crees que opera. Eso nos permite construir el sistema que realmente necesitas, no el que sonaba bien en la primera reunión.",
        },
        {
          title: "Semanas, no meses",
          description:
            "Nuestro proceso está diseñado para entregar valor rápido. Prototipamos, validamos y construimos en ciclos cortos para que veas resultados desde el día uno.",
        },
        {
          title: "Tú al negocio, nosotros al sistema",
          description:
            "No te pedimos que aprendas tecnología. Nosotros traducimos tu visión en software funcional mientras tú te enfocas en lo que mejor sabes hacer.",
        },
      ],
    },

    differentiator: {
      quote:
        "No tienes que llegar con la respuesta. Llegas con el reto, y juntos construimos la solución.",
      body:
        "Por eso no te pedimos un documento de 80 páginas. Escuchamos tu problema, proponemos una solución concreta, y te mostramos un prototipo funcional en días — no en meses. Iteramos juntos hasta que dices: “esto es exactamente lo que necesitaba”.",
    },

    speed: {
      milestones: [
        { label: "Descubrimiento", week: "Sem 1" },
        { label: "Diseño", week: "Sem 2" },
        { label: "Desarrollo", week: "Sem 2–4" },
        { label: "Entrega", week: "Sem 4" },
      ],
      metrics: [
        { label: "días", description: "de idea a producción" },
        { label: "sprints", description: "de entrega continua" },
        { label: "semana", description: "para el primer prototipo" },
      ],
      metricAria: "Métrica",
    },

    industries: {
      heading: "Industrias que ya transformamos",
      cta: "¿No ves tu industria? La siguiente puede ser la tuya.",
      items: [
        {
          name: "Salud",
          description:
            "Sistemas que cumplen regulación y simplifican la operación clínica.",
          areas: ["Expediente clínico", "Agenda", "Portal de pacientes"],
        },
        {
          name: "Automotriz",
          description:
            "Plataformas que conectan toda la cadena, del piso de ventas a postventa.",
          areas: [
            "Gestión de inventario",
            "CRM dealers",
            "Logística",
            "Portal de servicios",
          ],
        },
        {
          name: "Servicios B2B",
          description:
            "Software que elimina trabajo manual y da visibilidad en tiempo real.",
          areas: ["Portales cliente", "Automatización", "Reporteo", "Integraciones"],
        },
      ],
    },

    process: {
      heading: "Así trabajamos",
      subheading:
        "Cuatro pasos. Cero sorpresas. Transparencia total de principio a fin.",
      steps: [
        {
          title: "Escuchamos",
          description:
            "Nos reunimos contigo para entender tu operación, tus dolores y tus objetivos. Sin jerga técnica, sin formularios eternos. Una conversación honesta.",
        },
        {
          title: "Proponemos",
          description:
            "Diseñamos una solución a medida con alcance claro, tiempos realistas y presupuesto transparente. Sabes exactamente qué vas a recibir y cuándo.",
        },
        {
          title: "Construimos rápido",
          description:
            "Desarrollamos en ciclos cortos con entregables visibles cada semana. Puedes tocar, probar y dar feedback desde el primer sprint.",
        },
        {
          title: "Evolucionamos",
          description:
            "Después del lanzamiento seguimos contigo. Medimos resultados, optimizamos y escalamos tu sistema conforme crece tu negocio.",
        },
      ],
    },

    tech: {
      eyebrow: "Velocidad posible gracias a",
      names: [
        "LLMs",
        "Asistentes de código",
        "Automatización",
        "Cloud nativo",
        "CI/CD inteligente",
      ],
      body:
        "Usamos inteligencia artificial como acelerador, no como reemplazo. La IA no sustituye el criterio de un equipo experimentado — lo amplifica para entregar más rápido sin sacrificar calidad.",
    },

    cta: {
      headingPart1: "¿Listo para dejar de operar en",
      headingHighlight: "Excel",
      headingPart2: "?",
      subtitle:
        "Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.",
      labels: {
        name: "Nombre",
        email: "Email",
        message: "Tu reto",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@empresa.com",
        message: "¿Qué operas hoy manualmente?",
      },
      errors: {
        required: "Requerido",
        invalidEmail: "Formato inválido",
      },
      buttons: {
        idle: "Enviar mensaje",
        sending: "Enviando...",
        error: "Error, intenta de nuevo",
      },
      success: {
        title: "Mensaje enviado",
        body: "Te respondemos en menos de 24 horas.",
        reset: "Enviar otro mensaje",
      },
    },

    footer: {
      tagline: "De idea a operación. En semanas.",
      location: "Monterrey, México",
      links: {
        privacy: "Privacidad",
        terms: "Términos",
        contact: "Contacto",
      },
      copyright: (year: number) =>
        `© ${year} Ciavora. Todos los derechos reservados.`,
    },

    meta: {
      title: "Ciavora | Software a medida que acelera tu negocio",
      description:
        "Desarrollo de software personalizado para empresas que necesitan velocidad, calidad y resultados medibles.",
    },
  },

  en: {
    nav: {
      links: {
        servicios: "Services",
        proceso: "Process",
        industrias: "Industries",
      },
      cta: "Let's talk",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      localeAria: "Language",
    },

    hero: {
      eyebrow: "Custom software development",
      titleLine1: "Your operation, digitized.",
      titleLine2: "In weeks, not years.",
      subtitle:
        "We build the exact system your business needs — because we understand your industry before writing a single line of code.",
      ctaPrimary: "Tell us your challenge",
      ctaSecondary: "See how we work",
    },

    valueProp: {
      heading: "What sets us apart",
      cards: [
        {
          title: "We understand sooner",
          description:
            "We map how your business actually operates today — not how you think it operates. That lets us build the system you really need, not the one that sounded good in the first meeting.",
        },
        {
          title: "Weeks, not months",
          description:
            "Our process is designed to deliver value fast. We prototype, validate, and ship in short cycles so you see results from day one.",
        },
        {
          title: "You run the business, we build the system",
          description:
            "We won't ask you to learn technology. We translate your vision into working software while you focus on what you do best.",
        },
      ],
    },

    differentiator: {
      quote:
        "You don't have to arrive with the answer. Arrive with the challenge, and we build the solution together.",
      body:
        "That's why we don't ask for an 80-page spec. We listen to your problem, propose a concrete solution, and show you a working prototype in days — not months. We iterate together until you say: “this is exactly what I needed”.",
    },

    speed: {
      milestones: [
        { label: "Discovery", week: "Wk 1" },
        { label: "Design", week: "Wk 2" },
        { label: "Development", week: "Wk 2–4" },
        { label: "Delivery", week: "Wk 4" },
      ],
      metrics: [
        { label: "days", description: "from idea to production" },
        { label: "sprints", description: "of continuous delivery" },
        { label: "week", description: "to first prototype" },
      ],
      metricAria: "Metric",
    },

    industries: {
      heading: "Industries we've already transformed",
      cta: "Don't see your industry? Yours could be next.",
      items: [
        {
          name: "Healthcare",
          description:
            "Systems that meet regulations and simplify clinical operations.",
          areas: ["Medical records", "Scheduling", "Patient portal"],
        },
        {
          name: "Automotive",
          description:
            "Platforms that connect the entire chain, from showroom to after-sales.",
          areas: [
            "Inventory management",
            "Dealer CRM",
            "Logistics",
            "Service portal",
          ],
        },
        {
          name: "B2B Services",
          description:
            "Software that eliminates manual work and gives real-time visibility.",
          areas: ["Client portals", "Automation", "Reporting", "Integrations"],
        },
      ],
    },

    process: {
      heading: "How we work",
      subheading:
        "Four steps. Zero surprises. Total transparency from start to finish.",
      steps: [
        {
          title: "We listen",
          description:
            "We meet with you to understand your operation, your pain points, and your goals. No technical jargon, no endless forms. An honest conversation.",
        },
        {
          title: "We propose",
          description:
            "We design a tailored solution with clear scope, realistic timelines, and transparent pricing. You know exactly what you're getting and when.",
        },
        {
          title: "We build fast",
          description:
            "We develop in short cycles with visible deliverables every week. You can touch, test, and give feedback from the first sprint.",
        },
        {
          title: "We evolve",
          description:
            "After launch we stay with you. We measure results, optimize, and scale your system as your business grows.",
        },
      ],
    },

    tech: {
      eyebrow: "Speed made possible by",
      names: [
        "LLMs",
        "Code assistants",
        "Automation",
        "Cloud native",
        "Smart CI/CD",
      ],
      body:
        "We use AI as an accelerator, not a replacement. AI doesn't substitute for the judgment of an experienced team — it amplifies it to deliver faster without sacrificing quality.",
    },

    cta: {
      headingPart1: "Ready to stop running everything in",
      headingHighlight: "Excel",
      headingPart2: "?",
      subtitle:
        "Tell us about your project and we'll get back to you in under 24 hours.",
      labels: {
        name: "Name",
        email: "Email",
        message: "Your challenge",
      },
      placeholders: {
        name: "Your name",
        email: "you@company.com",
        message: "What are you doing manually today?",
      },
      errors: {
        required: "Required",
        invalidEmail: "Invalid format",
      },
      buttons: {
        idle: "Send message",
        sending: "Sending...",
        error: "Error, try again",
      },
      success: {
        title: "Message sent",
        body: "We'll get back to you in under 24 hours.",
        reset: "Send another message",
      },
    },

    footer: {
      tagline: "From idea to operation. In weeks.",
      location: "Monterrey, Mexico",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
      },
      copyright: (year: number) =>
        `© ${year} Ciavora. All rights reserved.`,
    },

    meta: {
      title: "Ciavora | Custom software that accelerates your business",
      description:
        "Custom software development for businesses that need speed, quality, and measurable results.",
    },
  },
} as const;

export type Dict = typeof dictionary["es"];
