import ProgramsHero from '@/components/programs/ProgramsHero';
import IntroText from '@/components/programs/IntroText';
import ProgramCard from '@/components/programs/ProgramCard';
import BePartOfChange from '@/components/BePartOfChange';

export default function Programs() {
  return (
    <main className="bg-white">
      <ProgramsHero />
      <IntroText />

      <ProgramCard
        title="Widows Empowerment Initiative"
        description="We design our initiatives to restore dignity, spark inspiration, and create opportunities. Whether supporting widows through business grants or inspiring students to discover their purpose, our programs are designed for real, lasting impact."
        image="/11.jpg"
        ctaLabel="Donate to Support Widows"
        ctaHref="/donate"
        note="In 2024 alone, 34 widows received startup capital to run local businesses, creating sustainable income for their households."
        decoSrc="/laurel weath.png"
        decoClassName="-bottom-10 -left-10 w-40"
      />

      <ProgramCard
        title="Student Mentorship & Inspiration"
        description="Our mentorship programs in secondary schools and universities focus on talent discovery, purpose development, and creative writing. Students receive guidance to unlock potential and prepare for life beyond the classroom."
        image="/4.jpg"
        ctaLabel="Volunteer as a Mentor"
        ctaHref="/get-involved"
        reversed
        note="We've reached 11 schools and guided over 110 students in building confidence, discovering talents, and shaping career paths."
        decoSrc="/Light Bulb.png"
        decoClassName="-top-8 -right-8 w-24"
      />

      <ProgramCard
        title="Education & Creativity Awards"
        description="We celebrate creativity through competitions and awards that spotlight students' talent in writing, arts, and innovation. By rewarding achievements, we encourage students to pursue passions and develop skills for the future."
        image="/Rectangle 29.png"
        ctaLabel="Sponsor a Student Award"
        ctaHref="/donate"
        note="68 students awarded in our annual creativity showcase, gaining recognition and resources to keep building their talents."
        decoSrc="/Oval Love.png"
        decoClassName="-top-6 left-6 w-20"
      />

      <ProgramCard
        title="Community Outreach"
        description="We bring support directly to communities, reaching widows and students where they are. Through outreaches, mentorship camps, and relief programs, we extend help and encouragement to those in need."
        image="/Rectangle 67.png"
        ctaLabel="Join an Outreach"
        ctaHref="/get-involved"
        reversed
        note="In 2024, we visited 7 communities, providing food, mentorship, and resources to widows and students."
        decoSrc="/brain icon.png"
        decoClassName="-bottom-8 right-12 w-24"
      />

      <BePartOfChange />
    </main>
  );
}



