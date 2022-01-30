import { useState } from "react"
import styles from "./Todo.module.css"


function Todo() {
    const [list, setList] = useState("");
    const [lists, setLists] = useState([])
    const [checked, setChecked] = useState([])
    const onChange = (e) => {
        setList(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setLists((currentArray) => [...lists, list])
    }

    return (
        <div className={styles.todo}>
            <h1>오늘 나의 할 일 ! !</h1>
            <h3>오늘 하루도 알차게~~</h3>
            <form onSubmit={onSubmit}>
                <input
                    value={list}
                    placeholder="입력하세요!!"
                    type="text"
                    onChange={onChange}
                />
                <button>추가</button>
            </form>

            <div className="styles.checkbox">
                {lists.map((item, index) =>
                    <div key={index}>
                        <input type="checkbox" 
                        value={checked ? setChecked((current)=>[...checked, current]) : null}
                        id="checkbox"
                        />{item}
                    </div>
                )}           
            </div>

            


        </div>

    );
}


export default Todo;