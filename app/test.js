import styles from "@/app/page.module.css";

export default function Test() {
    let genSegitiga=()=>{

    }
    return (
        <div className={styles.main}>
            <input type="text" placeholder="Input Angka"/>
            <div onClick={(e)=>{}}>Generate Segitiga</div><button>Generate Bilangan Ganjil</button>
            <button>Generate Bilangan Prima</button>
        </div>
    )
}