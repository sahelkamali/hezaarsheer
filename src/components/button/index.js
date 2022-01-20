import css from "./button.module.css";

function button(props){
    const { color , onClick , title  } = props;

return (
    <button className={css[color]} onClick={onClick}>
    {title}
</button>);
}
export default button;