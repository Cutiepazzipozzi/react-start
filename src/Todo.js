import { useEffect, useState } from "react"
import styles from "./Todo.module.css"


function Todo() {
    const [list, setList] = useState("");
    const [lists, setLists] = useState([])
    const [finished, setFinished] = useState([])
    const cnt=0;
    const onChange = (e) => {
        setList(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setLists((currentArray) => [...lists, list]);
    }
    const onChecked = (e) => {
        var count = {id:e.target.value, cnt:cnt}
        if (e.target.checked === Boolean(true)) {
            setFinished((currentArray) => [...finished, e.target.value]);
            
        }
    }

    return (
        <div className={styles.todo}>
            <h1>※ 오늘 나의 할 일 ※</h1>
            <h3>오늘 하루도 알차게~~</h3>
            <div className={styles.form}>
                <form onSubmit={onSubmit} className={styles.submit}>
                    <input className={styles.input}
                        value={list}
                        placeholder="입력하세요!!"
                        type="text"
                        onChange={onChange}
                    />
                    <button className={styles.button}>추가</button>
                </form>

                <div className={styles.checkbox}>
                    {lists.map((item, index) =>
                        <div key={index}>
                            <input type="checkbox"
                                id="checkbox"
                                value={item}
                                onChange={onChecked}
                            />{item}
                        </div>
                    )}
                </div>
            </div>

            
            {console.log(finished)}

        </div>

    );
}


export default Todo;