import React, { useState } from "react";

const AvatarUploader = ({ initialSrc, size = 100, id="avatar-upload", tooltipText = "" }) => {
  const [avatar, setAvatar] = useState(initialSrc);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <label htmlFor={id}> 
        <img
          src={avatar}
          alt="Avatar"
          title={tooltipText} //aca se muestra el tooltip
          width={size}
          height={size}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
            border: "2px solid #ccc"
          }}
        />
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AvatarUploader;
