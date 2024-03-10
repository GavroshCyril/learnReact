export const UserInfo = ({ fullNickname }) => {
  let string = "Cyril Gavrosh";
  const shortNicknameAsString = string.split(" ");
  const shortNickname =
    shortNicknameAsString[0].slice(0, 1) + shortNicknameAsString[1].slice(0, 1);

  return (
    <div className="nickname-container">
      <div className="short-nickname">{shortNickname}</div>
      <span className="full-nickname">{fullNickname}</span>
    </div>
  );
};
