import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gradient-to-t from-blue-200 to-purple-200 text-gray-800">

        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yogeshkushawah/"
                target="_blank"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/yogeshmasaistudent" target="_blank">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/yogeshkushawa10" target="_blank">
                <FaXTwitter size={24} />
              </a>
              
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner 💚 Yogesh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
