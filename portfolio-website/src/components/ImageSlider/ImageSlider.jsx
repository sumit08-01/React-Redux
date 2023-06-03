import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ImageSlider = ({ imageList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const opneModalSlider = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };
  const renderImageList = () => {
    // eslint-disable-next-line react/prop-types
    return imageList.map((imageLink, i) => {
      return (
        <Image
          onClick={() => opneModalSlider(i)}
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink}
        />
      );
    });
  };
  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={false}
      // eslint-disable-next-line react/prop-types
      arrows={imageList.length > 1}
      autoplay={false}
    >
      {renderImageList()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      size="6xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <ModalCloseButton zIndex={1} bg="white" />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );
  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
};
