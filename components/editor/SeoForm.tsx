import { ChangeEventHandler, FC } from "react";
import classnames from "classnames";

interface Props {}

const commonInput =
  "w-full bg-transparent outline-none border-2 border-secondary-dark focus:border-primary-dark focus:dark:border-primary rounded transition text-primary-dark dark:text-primary p-2";

const SEOForm: FC<Props> = (props): JSX.Element => {
  return (
    <div className="space-y-4">
      <h1
        className="text-primary-dark dark:text-primary
        text-xl font-semibold"
      >
        SEO Section
      </h1>

      <SeoInput name="slug" placeholder="slug-goes-here" label="Slug:" />
      <SeoInput name="tags" placeholder="React, Next JS" label="Tags:" />

      <div className="relative">
        <textarea
          className={classnames(commonInput, "text-lg h-20 resize-none")}
          placeholder="Meta description 150 characters will be fine"
        ></textarea>
        <p className="absolute bottom-3 right-3 text-primary-dark dark:text-primary text-sm">
          0/150
        </p>
      </div>
    </div>
  );
};

const SeoInput: FC<{
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}> = ({ name, value, placeholder, label, onChange }) => {
  return (
    <label className="block relative">
      <span
        className="absolute top-1/2 -translate-y-1/2 text-sm font-semibold
    text-primary-dark dark:text-primary pl-2"
      >
        {label}
      </span>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={classnames(commonInput, "italic pl-10")}
        onChange={onChange}
      />
    </label>
  );
};

export default SEOForm;
