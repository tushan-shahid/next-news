import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <p>&copy; 2023 Next News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
