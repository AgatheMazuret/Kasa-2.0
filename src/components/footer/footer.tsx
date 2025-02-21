const Footer = () => {
  return (
    <footer className="bg-black w-full flex flex-col items-center justify-center mt-12 pb-8">
      <div className="flex flex-col items-center h-44 text-center">
        <img
          src="/logo-kasa-footer.png"
          alt="Logo Kasa"
          className="w-30 h-10 mt-10"
        />
        <p className="text-white text-sm sm:text-lg mt-4">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
