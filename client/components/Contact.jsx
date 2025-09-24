import Section from "./Section";

const Contact = () => (
  <Section id="contact" title="Get In Touch">
    <div className="max-w-xl mx-auto text-center">
      <p className="mb-8 text-neutral-400">
        I'm currently available for freelance work. If you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out.
      </p>
      <a 
        href="mailto:ishandwivedi1210@gmail.com"
        className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-neutral-200 transition-colors duration-300"
      >
        Contact Me
      </a>
    </div>
  </Section>
);

export default Contact;