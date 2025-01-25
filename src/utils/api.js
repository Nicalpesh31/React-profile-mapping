export const fetchProfiles = async () => {
  const response = await fetch("/profiles.json");
  return response.json();
};
