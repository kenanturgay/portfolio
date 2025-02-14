// Social Links
export const socialLinks = {
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/kenanturgay",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/kenan-turgay-4a7585120/",
  twitter: import.meta.env.VITE_TWITTER_URL || "https://x.com/knnturgay"
};

// Navigation
export const navLinks = {
  logo: "Kenan Turgay",
  menu: [
    { href: "#about", text: "Hakkımda" },
    { href: "#experience", text: "Deneyim" },
    { href: "#skills", text: "Yetenekler" },
    { href: "#projects", text: "Projeler" },
    { href: "#contact", text: "İletişim" }
  ]
};

// Hero Section
export const hero = {
  greeting: "Merhaba, Ben",
  name: "Kenan Turgay",
  title: "Frontend Geliştirici",
  description: "Frontend Geliştirici olarak modern web teknolojileri ile çalışıyor, kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.",
  buttons: {
    contact: "İletişime Geç",
    projects: "Projelerimi Gör"
  }
};

// About Section
export const about = {
  title: "Hakkımda",
  features: [
    {
      icon: "Code2",
      title: "Modern Teknolojiler",
      description: "React, Next.js ve TypeScript ile modern web uygulamaları geliştiriyorum."
    },
    {
      icon: "Laptop",
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel çalışan, kullanıcı dostu arayüzler tasarlıyorum."
    },
    {
      icon: "Users",
      title: "Takım Çalışması",
      description: "Agile metodolojiler ile takım çalışmasına uygun, sürdürülebilir kod yazıyorum."
    }
  ],
  description: [
    "Frontend geliştirici olarak modern web teknolojilerini kullanarak kullanıcı dostu ve performanslı uygulamalar geliştiriyorum. React, TypeScript ve modern frontend araçlarında uzmanım.",
    "Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyor, yeni teknolojileri yakından takip ediyorum. Temiz kod yazma ve en iyi pratikleri uygulama konusunda titizim."
  ]
};

// Experience Section
export const experiences = [
  {
    title: "Senior Frontend Geliştirici",
    company: "Tech Solutions A.Ş.",
    period: "2022 - Günümüz",
    description: "React, TypeScript ve modern web teknolojileri ile kurumsal uygulamalar geliştirme, takım liderliği ve kod kalitesi standartlarını belirleme."
  },
  {
    title: "Frontend Geliştirici",
    company: "Digital Innovations Ltd.",
    period: "2020 - 2022",
    description: "Modern web uygulamaları geliştirme, performans optimizasyonu ve kullanıcı deneyimi iyileştirmeleri."
  },
  {
    title: "Web Geliştirici",
    company: "Creative Web Stüdyo",
    period: "2019 - 2020",
    description: "Responsive web siteleri ve e-ticaret platformları geliştirme, müşteri ihtiyaçlarına özel çözümler üretme."
  }
];

// Skills Section
export const skills = [
  { name: "React & React Hooks", level: "İleri Seviye" },
  { name: "TypeScript", level: "İleri Seviye" },
  { name: "Next.js", level: "İleri Seviye" },
  { name: "Node.js", level: "Orta Seviye" },
  { name: "Tailwind CSS", level: "İleri Seviye" },
  { name: "Git & Version Control", level: "İleri Seviye" },
  { name: "REST APIs", level: "İleri Seviye" },
  { name: "GraphQL", level: "Orta Seviye" },
  { name: "Testing (Jest, RTL)", level: "Orta Seviye" }
];

// Projects Section
export const projects = [
  {
    title: "Modern E-Ticaret Platformu",
    description: "React, TypeScript ve Node.js ile geliştirilmiş, yüksek performanslı e-ticaret çözümü. Gerçek zamanlı stok takibi ve gelişmiş arama özellikleri.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    title: "Proje Yönetim Uygulaması",
    description: "Ekip çalışmasını kolaylaştıran, gerçek zamanlı güncellemeler ve görev takibi sunan modern proje yönetim aracı.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com/project-management",
    githubUrl: "https://github.com/example/project-management"
  },
  {
    title: "AI Destekli İçerik Yönetimi",
    description: "Yapay zeka ile içerik önerileri sunan, SEO odaklı modern içerik yönetim sistemi.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "OpenAI API", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com/ai-cms",
    githubUrl: "https://github.com/example/ai-cms"
  },
  {
    title: "Finansal Dashboard",
    description: "Gerçek zamanlı finansal verileri görselleştiren, özelleştirilebilir dashboard uygulaması.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "D3.js", "TypeScript", "Redux"],
    liveUrl: "https://example.com/finance-dashboard",
    githubUrl: "https://github.com/example/finance-dashboard"
  }
];

// Contact Section
export const contact = {
  title: "İletişim",
  contactInfo: [
    {
      icon: "Mail",
      title: "E-posta",
      value: "kenan.turgay@example.com",
      href: "mailto:kenan.turgay@example.com"
    },
    {
      icon: "Phone",
      title: "Telefon",
      value: "+90 123 456 7890",
      href: "tel:+901234567890"
    },
    {
      icon: "MapPin",
      title: "Konum",
      value: "İstanbul, Türkiye"
    }
  ],
  form: {
    title: "İletişim Formu",
    fields: {
      name: {
        label: "İsim",
        type: "text",
        required: true
      },
      email: {
        label: "E-posta",
        type: "email",
        required: true
      },
      message: {
        label: "Mesaj",
        type: "textarea",
        required: true
      }
    },
    submitButton: "Gönder"
  }
};

// Footer
export const footer = {
  copyright: "Tüm hakları saklıdır."
};