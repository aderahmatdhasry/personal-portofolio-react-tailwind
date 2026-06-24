const certifications = [
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    issuedAt: 2024,
    link: "https://www.dicoding.com/certificates/JMZV4OENRXN9",
    image: "#",
    type: "Certification",
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    issuedAt: 2023,
    link: "https://www.dicoding.com/certificates/07Z6WOVJYZQR",
    image: "#",
    type: "Certification",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="container mx-auto py-32 relative overflow-hidden border-t border-border"
    >
      <div className=" px-6 relative z-10 ">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm 
          font-medium tracking-wider uppercase animate-fade-in"
          >
            Recognition
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
           text-secondary-foreground"
          >
            Awards
            <span className="font-serif italic font-normal text-white">
              {" "}
              & Certifications.
            </span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-5xl mx-auto flex flex-col ">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 px-4 rounded-xl border-t border-border animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="flex flex-col gap-2 mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-display font-medium text-primary group-hover:text-primary-foreground transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base flex items-center gap-2">
                  {cert.issuer}
                  <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-700"></span>
                  <span> {cert.type}</span>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground font-medium ">
                  {cert.issuedAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
