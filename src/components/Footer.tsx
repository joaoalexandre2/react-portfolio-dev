export default function Footer() {
    return (
      <div className="container mx-auto flex max-w-4xl p-4 text-sm">
        <p className="flex-grow">
          &copy; {new Date().getFullYear()} &middot;  João Alexandre Kirst Poltronieri.
        </p>
        <ul className="flex flex-nowrap gap-2">
          <li>
            <a href="#">Termos de uso</a>
          </li>
          <li className="text-gray-500">&middot;</li>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
        </ul>
      </div>
    )
  }