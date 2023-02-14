exports.getAge = function (birthdate) {
  var diff_ms = Date.now() - birthdate.getTime();
  var age_dt = new Date(diff_ms);
  let result = age_dt.getUTCFullYear() - 1970;
  if (result < 0) {
    throw new Error('birthdate cannot be in the future');
  } else {
    return result;
  }
};
