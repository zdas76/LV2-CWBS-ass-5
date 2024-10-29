export const uploadImagetoImgdb = async (file: File) => {
  
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(
    "https://api.imgbb.com/1/upload?key=359f63f9ad5255ed4304d57ae8f579cf",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();

  return data;
};
