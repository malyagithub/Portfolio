import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Left: Text */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Malya</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Choudha
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
           I am a full-stack web developer focused on building clean, responsive, and
  user-friendly websites. My goal is to create solutions that are both
  visually appealing and highly functional.
          </p>
<div className="pt-4 opacity-0 animate-fade-in-delay-4">
  <a
    href="#projects"
    className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium
               transition-all duration-300
               hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
               hover:scale-105 active:scale-95"
  >
    View My Work
  </a>
</div>






        </div>

        {/* Right: Image with colorful aesthetic ring */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div
            className="relative p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-orange-400 to-cyan-400 shadow-lg
                       animate-fade-in hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-out"
          >
            {/* <img
              src="/images/mmmmm.jpg"
              alt="Malya Choudha"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-gray-900"
            /> */}

            <img
  src="/Profile/malya.png"
  alt="Malya Choudha"
  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-gray-900
             transition-transform duration-500 ease-out hover:scale-105 hover:brightness-110"
/>

          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
<ArrowDown className="h-5 w-5 text-primary " />

      </div>







    </section>
  );
};