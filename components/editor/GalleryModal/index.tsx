import { FC } from "react";
import ModalContainer, { ModalProps } from "@/components/common/ModalContainer";

interface Props extends ModalProps {}

const GalleryModal: FC<Props> = ({ visible, onClose }): JSX.Element => {
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className="bg-black p-20">
        <button className="bg-white p-3">Click</button>
      </div>
    </ModalContainer>
  );
};

export default GalleryModal;
