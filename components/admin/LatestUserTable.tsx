import { LatestUserProfile } from "@/utils/types";
import { FC } from "react";
import ProfileIcon from "../common/ProfileIcon";

interface Props {
  users?: LatestUserProfile[];
}

const LatestUserTable: FC<Props> = ({ users }): JSX.Element => {
  return (
    <div>
      <table className="w-full text-left text-primary-dark dark:text-primary">
        <tbody>
          <tr className="text-left bg-secondary-dark text-primary">
            <th className="p-2">Profile</th>
            <th className="p-2">Email</th>
            <th className="p-2">Provider</th>
          </tr>

          {users?.map((profile) => {
            return (
              <tr className="border-b" key={profile.id}>
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <ProfileIcon
                      nameInitial={profile.name[0].toUpperCase()}
                      avatar={profile.avatar}
                    />
                    <p>{profile.name}</p>
                  </div>
                </td>
                <td className="p-2">{profile.email}</td>
                <td className="p-2">{profile.provider}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LatestUserTable;
