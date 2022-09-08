const SearchIcon = ({ width = "26px", ...props }) => (
  <svg
    {...props}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
  >
    <path
      fill="#333"
      d="M17.822 16.78l-4.729-4.728A7.39 7.39 0 002.15 2.15a7.39 7.39 0 009.902 10.944l4.728 4.73a.74.74 0 001.042-1.043zm-14.63-5.223a5.912 5.912 0 118.358 0 5.875 5.875 0 01-8.357 0z"
    />
  </svg>
);

const CloseIcon = ({ width = "26px", ...props }) => (
  <svg
    {...props}
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={width}
  >
    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
  </svg>
);

export { SearchIcon, CloseIcon };
