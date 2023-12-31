import devGuru from "../assets/portfolio/devGuru.png";
import dreamHome from "../assets/portfolio/dreamHome.png";
import newCastle from "../assets/portfolio/newCastle.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: devGuru,
      demolink: "https://devguru.netlify.app/",
      codelink: "https://github.com/VSCRemy/dev-guru-landing-page",
    },
    {
      id: 2,
      src: newCastle,
      demolink: "https://newcastleclothing.netlify.app/",
      codelink: "https://github.com/VSCRemy/newcastle-mini-ecommerce-project",
    },
    {
      id: 3,
      src: dreamHome,
      demolink: "https://dreamhomerentals.netlify.app/",
      codelink: "https://github.com/VSCRemy/real-state-project",
    },
  ];

  const handleDemoClick = (demolink) => {
    if (demolink) {
      window.open(demolink, "_blank");
    }
  };

  const handleCodeClick = (codelink) => {
    if (codelink) {
      window.open(codelink, "_blank");
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demolink, codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(demolink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(codelink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
