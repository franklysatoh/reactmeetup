import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  /**
   * define to use some func inside Favorite context
   */
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    console.log('toggleFavoritesStatusHandler');
    console.log(itemIsFavorite);
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li key={props.id} className={classes.item}>
      <Card>
        {/* This block will be in props.children in Card */}
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          {itemIsFavorite}
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
