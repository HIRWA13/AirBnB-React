import Card from "./Card";
import {experience} from '../assets/experience.js'

export default function Cards() {

    const experienceReturned = experience.map(exp => {
        return (
            <Card 
                    key={exp.id}
                    item={exp}
                />
        )
    })

    return (
      <>
        <div className="grid grid-cols-3 place-items-center">
            {experienceReturned}
        </div>
      </>
    );
}