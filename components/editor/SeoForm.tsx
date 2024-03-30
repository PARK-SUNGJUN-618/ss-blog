import { FC } from "react";

interface Props {}

const SEOForm: FC<Props> = (props): JSX.Element => {
  return (
    <div className="space-y-4">
      <h1
        className="text-primary-dark dark:text-primary
        text-xl font-semibold"
      >
        SEO Section
      </h1>
      <input
        type="text"
        placeholder="slug-goes-here"
        className="w-full bg-transparent outline-none
          order-2 border-secondary-dark focus:border-primary-dark focus:dark:border-primary
          rounded transition text-primary-dark dark:text-primary p-2 "
      />
    </div>
  );
};

export default SEOForm;
