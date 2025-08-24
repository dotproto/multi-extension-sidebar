
export const subObj = (obj, ...keys) => {
  if (keys.length == 1 && Array.isArray(keys[0])) {
    keys = keys[0];
  }
  const subset = {};
  for (const key of keys) {
    if (Reflect.has(obj, key)) {
      subset[key] = obj[key];
    }
  }
  return subset;
};
