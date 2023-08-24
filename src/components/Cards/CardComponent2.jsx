import style from "./CardComponent.module.css";

function CardComponent (props) {

    const imgUrlDefault = "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{props.title ?? "Loading..."}</h2>
            <img className={style.img} src={props.imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;