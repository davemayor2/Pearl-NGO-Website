import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import MapSection from '../../components/contact/MapSection';

export default function Contact() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </main>
  );
}



