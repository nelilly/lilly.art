const filterRole = (array, filter) => array.filter((item) => item.role.find(element => element.includes(filter)));
export default filterRole;
