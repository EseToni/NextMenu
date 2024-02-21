const validateId = (id) => {
  if (!id) {
    throw new Error("id is required");
  }
  const regex = /^[0-9a-fA-F]{24}$/;

  return regex.test(id);
};

export default validateId;
