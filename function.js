/**********************************************************
 * RegEx Test
 *
 * exemple phone number
 * ^(?:(?:\+|00)\d{2,3}|0)\s*[1-9](?:[\s.-]*\d{2}){4}$
 *
 * exemple date & time, short format
 * xx\zz\yyyy, hh:mm or xx\zz\yyyy, hh:mm:ss
 * xx\zz\yyyy, hh:mm am or xx\zz\yyyy, hh:mm:ss pm
 * ^(\d{1,2})\/(\d{1,2})\/(\d{4}), \d{2}:\d{2}([:]\d{2})?( [aApP][mM])?$
 **********************************************************/
window.function = function (regex, text, rettrue, retfalse) {
  regex = regex.value ?? "";
  text = text.value ?? "";
  retTrue = rettrue.value ?? "";
  retFalse = retfalse.value ?? "";

  const re = new RegExp(regex);
  var ok = re.exec(text);
  if (!ok || text == "") return retFalse;
  else return retTrue;
};
