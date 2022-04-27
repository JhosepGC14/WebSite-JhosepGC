export function calculateAge(birthday: string) {
  var birthday_arr = birthday.split("/");
  var birthday_date = new Date(
    Number(birthday_arr[2]),
    Number(birthday_arr[1]) - 1,
    Number(birthday_arr[0])
  );
  var ageDifMs = Date.now() - birthday_date.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
