import { FC } from "react";
import ModalContainer, { ModalProps } from "./ModalContainer";
import classNames from "classnames";
import { ImSpinner3 } from "react-icons/im";

interface Props extends ModalProps {
  title: string;
  subTitle: string;
  busy?: boolean;
  onCancel?(): void;
  onConfirm?(): void;
}

const commonBtnClasses = "px-3 py-1 text-white rounded";

const ConfirmModal: FC<Props> = ({
  visible,
  title,
  subTitle,
  busy = false,
  onClose,
  onCancel,
  onConfirm,
}): JSX.Element => {
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className="bg-primary-dark dark:bg-primary rounded p-3 max-w-[380px]">
        {/* title */}
        <p className="dark:text-primary-dark text-primary font-semibold text-lg">
          {title}
        </p>
        {/* sub title */}
        <p className="dark:text-primary-dark text-primary">{subTitle}</p>
        {/* buttons */}
        {busy && (
          <p className="flex items-center space-x-2 pt-2 text-primary dark:text-primary-dark">
            <ImSpinner3 className="animate-spin" />
            <span>Please wait</span>
          </p>
        )}
        {!busy && (
          <div className="flex items-center space-x-2 pt-2">
            <button
              onClick={onConfirm}
              className={classNames(commonBtnClasses, "bg-red-500")}
            >
              Confirm
            </button>
            <button
              onClick={onCancel}
              className={classNames(commonBtnClasses, "bg-blue-500")}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default ConfirmModal;
