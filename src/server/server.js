import axios from "axios";

export const getGalleryImages = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/get-images`);
    
    console.log(response);
    return response.data; // Assuming the API returns an object with an 'images' array
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}