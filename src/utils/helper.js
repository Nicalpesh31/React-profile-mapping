
export const validateProfile = (profile) => {
    const { name, description, photo, address } = profile;
    if (!name || !description || !photo || !address) {
      return false;
    }
    return true;
  };
  
  export const formatAddressForMap = (address) => {
    return encodeURIComponent(address);
  };
  
 
  export const getRandomCoordinates = () => {
    const lat = (Math.random() * 180 - 90).toFixed(6); 
    const lng = (Math.random() * 360 - 180).toFixed(6);
    return { lat: parseFloat(lat), lng: parseFloat(lng) };
  };
  

  export const formatProfileCard = (profile) => {
    return {
      ...profile,
      shortDescription: profile.description.length > 50
        ? `${profile.description.slice(0, 50)}...`
        : profile.description,
    };
  };
  

  export const handleError = (error) => {
    console.error(error.message);
    alert("An error occurred. Please try again.");
  };
  