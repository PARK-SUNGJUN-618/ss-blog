import classNames from "classnames";
import { ChangeEventHandler, FC, useState } from "react";

interface Props {}

const commonClass =
  "border border-dashed border-secondary-dark rounded cursor-pointer flex items-center justify-center aspect-video";

const ThumbnailSelector: FC<Props> = (props): JSX.Element => {
  const [selectedThumbnail, setSelectedThumbnail] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { files } = target;
    if (!files) return;

    const file = files[0];
    setSelectedThumbnail(URL.createObjectURL(file));
  };

  return (
    <div className="w-32">
      <input
        type="file"
        hidden
        accept="image/jpg, image/png, image/jpeg"
        id="thumbnail"
        onChange={handleChange}
      />
      <label htmlFor="thumbnail">
        {selectedThumbnail ? (
          <img
            src={selectedThumbnail}
            alt=""
            className={classNames(commonClass, "object-cover")}
          />
        ) : (
          <PosterUI label="Thumbnail" />
        )}
      </label>
    </div>
  );
};

const PosterUI: FC<{ label: string; className?: string }> = ({
  label,
  className,
}) => {
  return (
    <div className={classNames(commonClass, className)}>
      <span>{label}</span>
    </div>
  );
};

export default ThumbnailSelector;
