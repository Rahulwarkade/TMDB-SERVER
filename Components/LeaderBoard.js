import React from 'react'
import style from './LeaderBoard.module.css'
const LeaderBoard = () => {

    const leaders = [{ name: "RuiZafon", allEdits: "1,135,407", edits: "30,965", nic: "R" },
    { name: "Samara", allEdits: "2,869,629", edits: "8,304", nic: "S" },
    { name: "Talestalker", allEdits: "988,867", edits: "5,029", nic: "T" },
    { name: "Jane", allEdits: "29,328", edits: "4,648", nic: "J" },
    { name: "Kreepykonl", allEdits: "191,646", edits: "4,541", nic: "K" },
    { name: "SAFD", allEdits: "147,468", edits: "8,376", nic: "S" },
    { name: "qualitylover", allEdits: "473,926", edits: "5,493", nic: "q" },
    { name: "Caractacus", allEdits: "68,194", edits: "5,018", nic: "C" },
    { name: "raze464", allEdits: "659,608", edits: "4,604", nic: "r" },
    { name: "PomaH", allEdits: "86,695", edits: "3,572", nic: "P" }]
    return <>
        <div className={style.container}>
            <div className={style.top}>
                <h1>Leaderboard </h1>
                <div classname={style.c}>
                    <div className={style.circle}>
                        <div className={style.circle1}></div> <span>All Time Edits</span>
                    </div>
                    <div className={style.circle}>
                        <div className={style.circle2}></div> <span>Edits This Week</span>
                    </div>
                </div>
            </div>
            <div className={style.board}>
                {leaders.map((profile) => {
                    return (
                        <div className={style.profile}>
                            <div className={style.pic}>
                                <h6>{profile.nic}</h6>
                            </div>
                            <div className={style.details}>
                                <h4>{profile.name}</h4>
                                <div className={style.li}>
                                    <div className={style.line1}></div>
                                    <span>{profile.allEdits}</span>
                                </div>
                                <div className={style.li}>
                                    <div className={style.line2}></div>
                                    <span>{profile.edits}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
}

export default LeaderBoard