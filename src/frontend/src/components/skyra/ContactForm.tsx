import { useState } from 'react';
import { useSubmitContactForm } from '../../hooks/useSubmitContactForm';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    contactType: '',
    name: '',
    organization: '',
    email: '',
    message: ''
  });

  const { mutate: submitForm, isPending, isSuccess, isError } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.contactType || !formData.name || !formData.organization || !formData.email) {
      return;
    }

    submitForm(formData, {
      onSuccess: () => {
        setFormData({
          contactType: '',
          name: '',
          organization: '',
          email: '',
          message: ''
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-foreground">Thank you for your interest!</h3>
        <p className="text-muted-foreground mb-6">We'll be in touch soon to discuss how SKYRA can benefit your project.</p>
        <button
          onClick={() => window.location.reload()}
          className="skyra-link"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contactType" className="block text-sm font-medium text-foreground mb-2">
          I am a *
        </label>
        <select
          id="contactType"
          name="contactType"
          value={formData.contactType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        >
          <option value="">Select your role</option>
          <option value="Municipal Body">Municipal Body</option>
          <option value="Architect">Architect</option>
          <option value="Developer">Developer</option>
          <option value="EPC Contractor">EPC Contractor</option>
          <option value="Smart City Planner">Smart City Planner</option>
          <option value="ESG Organization">ESG Organization</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      {isError && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
          There was an error submitting your form. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="skyra-btn-primary w-full text-lg"
      >
        {isPending ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}
