import Link from "next/link";
import { FC } from "react";
import Logo from "../Logo";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";
import { GitHubAuthButton } from "@/components/button";
import ProfileHead from "../ProfileHead";
import DropdownOptions, { dropDownOptions } from "../DropdownOptions";
import { signIn, useSession } from "next-auth/react";

interface Props {}

const UserNav: FC<Props> = (props): JSX.Element => {
  const { data, status } = useSession();
  const isAuth = status === "authenticated";

  const handleLoginWithGithub = async () => {
    await signIn();
  };

  const dropDownOptions: dropDownOptions = [
    { label: "Dashboard", onClick() {} },
    { label: "Logout", onClick() {} },
  ];
  return (
    <div className="flex items-center justify-between bg-primary-dark px-3 py-1">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center space-x-2 text-highlight-dark"
      >
        <Logo className="fill-highlight-dark w-5 h-5" />
        <span className="text-xl font-semibold">{APP_NAME}</span>
      </Link>
      <div className="flex items-center space-x-5">
        <button className="dark:text-secondary-dark text-secondary-light">
          <HiLightBulb size={34} />
        </button>

        {isAuth ? (
          <DropdownOptions
            options={dropDownOptions}
            head={<ProfileHead nameInitial="P" lightOnly />}
          />
        ) : (
          <GitHubAuthButton onClick={handleLoginWithGithub} lightOnly />
        )}
      </div>
    </div>
  );
};

export default UserNav;
