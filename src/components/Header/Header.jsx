import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="navbar bg-base-100 lexend container mx-auto">
      <div className="flex-1 navbar-start">
        <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Recipes</a></li>
          <li><a>About</a></li>
          <li><a>Search</a></li>
        </ul>
      </div>
      <div className="flex-none gap-2 navbar-end">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-[#0BE58A] btn-circle avatar">
            <div className="text-2xl">
              <CgProfile/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;