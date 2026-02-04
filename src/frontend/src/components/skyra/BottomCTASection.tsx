import ContactForm from './ContactForm';

export default function BottomCTASection() {
  return (
    <section id="contact" className="py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Partner with Skyra
            </h2>
            <p className="text-xl text-muted-foreground">
              Bring clean air into your city
            </p>
          </div>

          <div className="skyra-gradient-beige-blue rounded-3xl p-8 md:p-12 border border-border shadow-soft">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
