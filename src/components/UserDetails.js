import { useSelector } from 'react-redux';

const UserDetails = () => {
  const user = useSelector(state => state.user.user);
  const { email, name, nickname } = user;

  return (
    <div>
      <h3>Account details</h3>
      <ul>
        <li>
          <img
            src="http://unsplash.it/100/100?gravity=center"
            alt="Random unsplash img"
            width="100"
            height="100"
          />
        </li>
        <li>
          Name:
          {name}
        </li>
        <li>
          Username:
          {nickname}
        </li>
        <li>
          Email:
          {email}
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
