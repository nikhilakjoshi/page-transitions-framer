import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav className="border-b bg-white text-gray-400 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <ul className="flex items-center space-x-8 px-16 py-4">
          <li>
            <NavLink linkTitle="Home" path="/" />
          </li>
          <li>
            <NavLink linkTitle="Airplane" path="/airplane" />
          </li>
          <li>
            <NavLink linkTitle="Maze" path="/maze" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
