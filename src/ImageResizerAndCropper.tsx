import React, { useState } from 'react';
import AspectRatioSelector from './AspectRatioSelector';

const ImageResizerAndCropper = () => {
  const [selectedRatio, setSelectedRatio] = useState("4:3");

  const handleSelectRatio = (ratio) => {
    setSelectedRatio(ratio);
    // Add your logic here for handling the selected aspect ratio
  };

  return (
    <div>
      <h2>Image Resizer and Cropper</h2>
      <AspectRatioSelector
        selectedRatio={selectedRatio}
        onSelectRatio={handleSelectRatio}
      />
      {selectedRatio}
    </div>
  );
};

export default ImageResizerAndCropper;
