import { useState } from "react";
import IsBefore  from "date-fns/isBefore"
import DifferenceInCalendarDays from 'date-fns/differenceInDays'

import Seasons from './../data/season'

function Card() {
    const getSeason = () => {
        const { name }  = Seasons.filter( season => {
                            return !IsBefore(Date.now(), season.start)
                        }).pop()

        return name
    }

    const [season, setSeason] = useState(getSeason())

    const getDaysOffset = season => {
        const { start } = Seasons.filter( season => {
                                return !IsBefore(Date.now(), season.start)
                            }).shift()


        return DifferenceInCalendarDays(Date.now(), start)
    }

    const [daysOffset, setDaysOffset] = useState(getDaysOffset(season))

    return (
        <div className="p-6 border-2 rounded-md border-zinc-800 text-center">
            <h2>{ season }</h2>
            <span className="block mt-4">depuis <br/>  {daysOffset} jours</span>

            <button className="mt-8 mb-10 px-4 py-2 border-2 rounded-md border-red-300 hover:bg-red-300 hover:text-neutral-50 transition">
                Et après ?
            </button>
        </div>
    )
}

export default Card