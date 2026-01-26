import React, { useState } from "react";

export default function CubePortfolio() {
  const [activeSide, setActiveSide] = useState("front");

  const handleSideClick = (side) => {
    setActiveSide(side);
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center gap-8 py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

        * {
          font-family: 'Roboto', sans-serif;
        }

        /* ==================== 3D CUBE STYLES ==================== */
        .scene {
          perspective: 1500px;
        }

        .cube {
          transform-style: preserve-3d;
          transition: transform 1s ease-in-out;
        }

        /* Cube Transformations */
        .cube.show-front { transform: translateZ(-225px) rotateY(0deg); }
        .cube.show-right { transform: translateZ(-225px) rotateY(-90deg); }
        .cube.show-back { transform: translateZ(-225px) rotateY(-180deg); }
        .cube.show-left { transform: translateZ(-225px) rotateY(90deg); }
        .cube.show-top { transform: translateZ(-225px) rotateX(-90deg); }
        .cube.show-bottom { transform: translateZ(-225px) rotateX(90deg); }

        /* Cube Faces */
        .cube-face {
          backface-visibility: hidden;
        }

        .cube-face-front { transform: rotateY(0deg) translateZ(225px); }
        .cube-face-back { transform: rotateY(180deg) translateZ(225px); }
        .cube-face-right { transform: rotateY(90deg) translateZ(225px); }
        .cube-face-left { transform: rotateY(-90deg) translateZ(225px); }
        .cube-face-top { transform: rotateX(90deg) translateZ(225px); }
        .cube-face-bottom { transform: rotateX(-90deg) translateZ(225px); }

        /* Scrollbar Styling */
        .cube-face::-webkit-scrollbar {
          width: 6px;
        }

        .cube-face::-webkit-scrollbar-track {
          background: rgba(30, 64, 175, 0.1);
        }

        .cube-face::-webkit-scrollbar-thumb {
          background: rgb(29, 78, 216);
          border-radius: 3px;
        }

        .cube-face::-webkit-scrollbar-thumb:hover {
          background: rgb(37, 99, 235);
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
        crossOrigin="anonymous"
      />

      {/* ==================== NAVIGATION MENU ==================== */}
      <nav className="flex flex-wrap justify-center items-center gap-3 w-full max-w-3xl">
        <button
          onClick={() => handleSideClick("front")}
          className="min-w-[100px] h-11 px-5 bg-gradient-to-br from-blue-700/20 to-blue-900/10 border-2 border-blue-700 rounded-lg text-blue-100 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/50 active:translate-y-0"
        >
          Intro
        </button>
        <button
          onClick={() => handleSideClick("right")}
          className="min-w-[100px] h-11 px-5 bg-gradient-to-br from-blue-700/20 to-blue-900/10 border-2 border-blue-700 rounded-lg text-blue-100 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/50 active:translate-y-0"
        >
          Work
        </button>
        <button
          onClick={() => handleSideClick("back")}
          className="min-w-[100px] h-11 px-5 bg-gradient-to-br from-blue-700/20 to-blue-900/10 border-2 border-blue-700 rounded-lg text-blue-100 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/50 active:translate-y-0"
        >
          Education
        </button>
        <button
          onClick={() => handleSideClick("left")}
          className="min-w-[100px] h-11 px-5 bg-gradient-to-br from-blue-700/20 to-blue-900/10 border-2 border-blue-700 rounded-lg text-blue-100 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/50 active:translate-y-0"
        >
          Certificates
        </button>
        <button
          onClick={() => handleSideClick("top")}
          className="min-w-[100px] h-11 px-5 bg-gradient-to-br from-blue-700/20 to-blue-900/10 border-2 border-blue-700 rounded-lg text-blue-100 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/50 active:translate-y-0"
        >
          Projects
        </button>
        <button
          onClick={() => handleSideClick("bottom")}
          className="min-w-[100px] h-11 px-5 bg-gradient-to-br from-blue-700/20 to-blue-900/10 border-2 border-blue-700 rounded-lg text-blue-100 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/50 active:translate-y-0"
        >
          Contacts
        </button>
      </nav>

      {/* ==================== 3D CUBE SCENE ==================== */}
      <section className="scene w-[450px] h-[450px]">
        <div className={`cube w-full h-full relative show-${activeSide}`}>
          {/* FRONT FACE - INTRO */}
          <div className="cube-face cube-face-front absolute w-[450px] h-[450px] p-8 flex flex-col justify-center items-center bg-black/90 border border-blue-700/30 overflow-y-auto">
            <div className="flex flex-row items-center gap-5 mb-5">
              <div className="flex-1">
                <h1 className="text-3xl text-blue-50 pb-4 leading-tight font-bold">
                  Hi, I'm Lilly, a{" "}
                  <span className="text-blue-700">Frontend</span> Developer
                </h1>
                <p className="text-blue-100 py-1 text-sm leading-relaxed">
                  An economics major turned business journalist who found a
                  passion for coding and web development.
                </p>
                <p className="text-blue-100 py-1 text-sm leading-relaxed">
                  I started out on the software engineering path two years ago
                  with Python but one look at JavaScript was enough to convince
                  me that web development is going to be my zing.
                </p>
              </div>
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-blue-700 flex items-center justify-center flex-shrink-0">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BACK FACE - EDUCATION */}
          <div className="cube-face cube-face-back absolute w-[450px] h-[450px] p-8 flex flex-col justify-center items-center bg-black/90 border border-blue-700/30 overflow-y-auto">
            <h2 className="text-3xl text-blue-50 pb-4 font-bold mb-6">
              Educa<span className="text-blue-700">tion</span>
            </h2>
            <div className="w-full space-y-8">
              <div className="flex flex-row gap-4">
                <h4 className="text-xl text-blue-700 font-medium min-w-[120px]">
                  2020-2022
                </h4>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-medium pb-2">
                    Some university
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-blue-100 space-y-1">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Ipsam odio repudiandae, enim unde eveniet blanditiis
                      facilis.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <h4 className="text-xl text-blue-700 font-medium min-w-[120px]">
                  2016-2020
                </h4>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-medium pb-2">
                    Some other uni
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-blue-100 space-y-1">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Ipsam odio repudiandae, enim unde eveniet blanditiis
                      facilis.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FACE - WORK */}
          <div className="cube-face cube-face-right absolute w-[450px] h-[450px] p-8 flex flex-col justify-center items-center bg-black/90 border border-blue-700/30 overflow-y-auto">
            <h2 className="text-3xl text-blue-50 pb-4 font-bold mb-6">
              Wo<span className="text-blue-700">rk</span>
            </h2>
            <div className="w-full space-y-8">
              <div className="flex flex-row gap-4">
                <h4 className="text-xl text-blue-700 font-medium min-w-[120px]">
                  2020-2022
                </h4>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-medium pb-2">
                    Some company
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-blue-100 space-y-1">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Ipsam odio repudiandae, enim unde eveniet blanditiis
                      facilis.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <h4 className="text-xl text-blue-700 font-medium min-w-[120px]">
                  2016-2020
                </h4>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-medium pb-2">
                    Some other company
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-blue-100 space-y-1">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Ipsam odio repudiandae, enim unde eveniet blanditiis
                      facilis.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT FACE - CERTIFICATES */}
          <div className="cube-face cube-face-left absolute w-[450px] h-[450px] p-8 flex flex-col justify-center items-center bg-black/90 border border-blue-700/30 overflow-y-auto">
            <h2 className="text-3xl text-blue-50 pb-4 font-bold mb-6">
              Certi<span className="text-blue-700">fi</span>cates
            </h2>
            <div className="w-full space-y-3">
              <div className="flex flex-row items-center gap-4">
                <h4 className="text-xl text-blue-700 font-semibold min-w-[80px]">
                  2022
                </h4>
                <h4 className="text-xl text-white">Some certificate #1</h4>
              </div>
              <div className="flex flex-row items-center gap-4">
                <h4 className="text-xl text-blue-700 font-semibold min-w-[80px]">
                  2020
                </h4>
                <h4 className="text-xl text-white">
                  Some other certificate #2
                </h4>
              </div>
              <div className="flex flex-row items-center gap-4">
                <h4 className="text-xl text-blue-700 font-semibold min-w-[80px]">
                  2020
                </h4>
                <h4 className="text-xl text-white">Certificate #3</h4>
              </div>
              <div className="flex flex-row items-center gap-4">
                <h4 className="text-xl text-blue-700 font-semibold min-w-[80px]">
                  2018
                </h4>
                <h4 className="text-xl text-white">Older certificate #4</h4>
              </div>
              <div className="flex flex-row items-center gap-4">
                <h4 className="text-xl text-blue-700 font-semibold min-w-[80px]">
                  2018
                </h4>
                <h4 className="text-xl text-white">Certificate BBB #5</h4>
              </div>
            </div>
          </div>

          {/* TOP FACE - PROJECTS */}
          <div className="cube-face cube-face-top absolute w-[450px] h-[450px] p-8 flex flex-col justify-center items-center bg-black/90 border border-blue-700/30 overflow-y-auto">
            <h2 className="text-3xl text-blue-50 pb-4 font-bold mb-6">
              <span className="text-blue-700">Pro</span>jects
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                {
                  id: 1,
                  img: "https://cdn.pixabay.com/photo/2022/12/10/21/41/social-media-7647812_1280.jpg",
                },
                {
                  id: 2,
                  img: "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_1280.jpg",
                },
                {
                  id: 3,
                  img: "https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692_1280.jpg",
                },
                {
                  id: 4,
                  img: "https://cdn.pixabay.com/photo/2015/09/03/17/50/cobweb-921039_1280.jpg",
                },
                {
                  id: 5,
                  img: "https://cdn.pixabay.com/photo/2016/02/27/12/40/sculpture-1225487_1280.jpg",
                },
                {
                  id: 6,
                  img: "https://cdn.pixabay.com/photo/2016/10/13/15/23/labyrinth-1738039_1280.jpg",
                },
              ].map((project) => (
                <div
                  key={project.id}
                  className="w-[100px] h-[100px] border-2 border-blue-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-700/50 group"
                >
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${project.img})` }}
                  >
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="bg-black/80 px-2 py-1 mb-2 text-xs text-white rounded">
                        #{project.id} App
                      </p>
                      <a
                        href="#"
                        className="bg-black/80 px-2 py-1 text-[11px] text-blue-400 rounded hover:bg-blue-700 hover:text-white transition-colors"
                      >
                        Visit app <i className="fas fa-link text-blue-400"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM FACE - CONTACTS */}
          <div className="cube-face cube-face-bottom absolute w-[450px] h-[450px] p-8 flex flex-col justify-center items-center bg-black/90 border border-blue-700/30 overflow-y-auto">
            <h2 className="text-3xl text-blue-50 pb-4 font-bold mb-6">
              Con<span className="text-blue-700">tacts</span>
            </h2>
            <div className="space-y-3 mb-6">
              <h4 className="text-xl text-white font-medium">
                <i className="fas fa-location-arrow text-blue-700 mr-2"></i>
                Sofia, Bulgaria
              </h4>
              <h4 className="text-xl text-white font-medium">
                <i className="far fa-envelope text-blue-700 mr-2"></i>
                some.persons.email@gmail.com
              </h4>
              <h4 className="text-xl text-white font-medium">
                <i className="fas fa-phone text-blue-700 mr-2"></i>
                +359 889 111 222
              </h4>
            </div>
            <div className="flex gap-4 mt-4">
              <i className="fab fa-facebook text-3xl text-white cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-125"></i>
              <i className="fab fa-linkedin text-3xl text-white cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-125"></i>
              <i className="fab fa-github text-3xl text-white cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-125"></i>
              <i className="fab fa-codepen text-3xl text-white cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-125"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
