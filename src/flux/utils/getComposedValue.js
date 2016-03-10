import objectAssign from 'object-assign';

export default (defaultValue, assignValue) => {
  let value;
  if (defaultValue instanceof Object) {
    // object
    value = objectAssign({},
      defaultValue,
      assignValue);
  } else {
    // string
    value = assignValue || defaultValue;
  }
  return value;
};