import Link from "next/link";
import { FC } from "react";
import Logo from "../Logo";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";
import { GitHubAuthButton } from "@/components/button";
import ProfileHead from "../ProfileHead";
import DropdownOptions, { dropDownOptions } from "../DropdownOptions";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { UserProfile } from "@/utils/types";
import useDarkMode from "@/hooks/useDarkMode";

interface Props {}

const defaultOptions: dropDownOptions = [
  {
    label: "Logout",
    async onClick() {
      await signOut();
    },
  },
];

const UserNav: FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  const { data, status } = useSession();
  const isAuth = status === "authenticated";
  const profile = data?.user as UserProfile | undefined;
  const isAdmin = profile && profile.role === "admin";

  const { toggleTheme } = useDarkMode();

  const dropDownOptions: dropDownOptions = isAdmin
    ? [
        {
          label: "Dashboard",
          onClick() {
            router.push("/admin");
          },
        },
        ...defaultOptions,
      ]
    : defaultOptions;

  return (
    <div className="flex items-center justify-between bg-primary-dark px-5 md:py-2 py-1">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center space-x-2 text-highlight-dark"
      >
        <Logo className="bg-primary fill-highlight-light md:w-7 md:h-7 w-5 h-5 rounded-sm" />
        <span className="md:text-2xl font-semibold">{APP_NAME}</span>
      </Link>

      <div className="flex items-center space-x-5">
        <button
          onClick={toggleTheme}
          className="dark:text-secondary-dark text-secondary-light"
        >
          <HiLightBulb size={28} />
        </button>

        {isAuth ? (
          <DropdownOptions
            options={dropDownOptions}
            head={
              <ProfileHead
                nameInitial={profile?.name[0].toUpperCase()}
                avatar={profile?.avatar}
                lightOnly
              />
            }
          />
        ) : (
          <GitHubAuthButton lightOnly />
        )}
      </div>
    </div>
  );
};

export default UserNav;
