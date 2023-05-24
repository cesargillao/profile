const Contact = () => (
  <section id="contact" className="relative px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Get In Touch
        </h1>
        <h3 className="text-gray-400 mt-6">I'm currently looking for any new opportunities, my inbox is always open.</h3>
      </div>
      <a href="mailto:cesargillao@hotmail.com" className="contact-button">
        <span>Contact me</span>
      </a>
    </div>
  </section>
);

export default Contact