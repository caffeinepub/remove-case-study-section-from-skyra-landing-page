import { SiLinkedin, SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="skyra-gradient-blue-beige py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left flex items-center gap-4">
              <img
                src="/assets/generated/skyra-logo-mark.dim_128x128.png"
                alt="Skyra logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-sm text-muted-foreground">The Tiles That Breathe</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026. Built with love using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="skyra-link"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
