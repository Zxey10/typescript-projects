import { useState } from "react"

interface Person{
   person: {
    name: string,
    age: number,
    car: string
   }
}

const Interface = () => {

    const [people,setPeople] = useState<Person["person"][]>([
        {name: 'p1',age: 32, car: 'Subuwu'},
        {name: 'p2',age: 76, car: 'Porsche'},
        {name: 'p3',age: 65, car: 'Mazda'}
    ])

  return (
    <div>
        <ul>
            {people.map(person => (
                <li key={Math.random()}>{person.car}</li>
            ))}
        </ul>
    </div>
  )
}

export default Interface