import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileWrapper}>
      <div className={css.description}>
        <img className={css.imgWrapper} src={image} alt={name} />
        <p className={css.profileName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
