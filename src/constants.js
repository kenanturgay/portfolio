// Social Links
export const socialLinks = {
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  twitter: import.meta.env.VITE_TWITTER_URL
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


// Contact Section
export const contact = {
  title: "İletişim",
  
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
