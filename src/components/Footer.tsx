import { PIPButton } from "@getpip/react-pip-button";

import { PIPButtonCustom } from "./PIPButtonCustom";

const Footer = () => {
  return (
    <footer className="text-center text-white">
      <div className="w-100 pb-2">
        <div className="flex justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ToolsSolana"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.xnft.gg/app/621U7cWfav4ypS7e7uxdXcZTjTFgkeXW48sRReoFewg9"
            type="button"
            className="rounded-full border-2 flex justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.54201 1.25805C7.12356 1.25805 7.66905 1.33601 8.1741 1.48059C7.67963 0.328169 6.65297 0 5.51038 0C4.36555 0 3.3371 0.329459 2.84375 1.48738C3.3451 1.33771 3.88824 1.25805 4.4678 1.25805H6.54201ZM4.33478 2.41504C1.57335 2.41504 0 4.58743 0 7.2672V10.02C0 10.288 0.223858 10.5 0.5 10.5H10.5C10.7761 10.5 11 10.288 11 10.02V7.2672C11 4.58743 9.17041 2.41504 6.40899 2.41504H4.33478ZM5.49609 7.29102C6.46259 7.29102 7.24609 6.50751 7.24609 5.54102C7.24609 4.57452 6.46259 3.79102 5.49609 3.79102C4.5296 3.79102 3.74609 4.57452 3.74609 5.54102C3.74609 6.50751 4.5296 7.29102 5.49609 7.29102ZM0 12.118C0 11.8501 0.223858 11.6328 0.5 11.6328H10.5C10.7761 11.6328 11 11.8501 11 12.118V15.0293C11 15.5653 10.5523 15.9998 10 15.9998H1C0.447715 15.9998 0 15.5653 0 15.0293V12.118Z"
                  fill="currentColor"
                ></path>
            </svg>
          </a>
        </div>
      </div>
	  <PIPButtonCustom />
    </footer>
  );
};

export default Footer;
