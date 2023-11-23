"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

export default function Details() {
  const [showLess, setShowLess] = useState(true)

  return (
    <div>
      <div className="mb-6">
        <p className="pb-2 text-sm font-light text-muted-foreground">
          While working here, this person experienced
        </p>
        <p className="text-base font-normal">
          Sexual discrimination, Racial discrimination, Sexual harassment, An
          overall work environment
        </p>
      </div>
      <div className="mb-6">
        <p className="pb-2 text-sm font-light text-muted-foreground">
          Additional comments
        </p>
        <p
          className={cn(
            "text-base font-normal",
            showLess ? "line-clamp-3" : ""
          )}
        >
          One of the best places you could ever work. Very relaxed environment.
          Everyone is the best at what they do. Management is great. No
          complaints. Eu pellentesque nibh Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. A, alias placeat provident quibusdam
          soluta incidunt sunt officia cupiditate eaque ex eos quisquam impedit
          ad? Ipsa deserunt quae sequi delectus voluptas. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Facilis, consectetur, nesciunt non
          ullam praesentium rerum perspiciatis soluta libero tempora nam minima
          vero facere voluptatibus eaque id numquam eligendi reprehenderit
          molestiae? Earum, doloribus amet? Veniam! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Impedit, optio debitis maiores
          blanditiis earum, recusandae veritatis rem dicta asperiores tempore
          architecto dolores dolorum, quo mollitia pariatur est ducimus
          praesentium! Asperiores, et, ipsum doloremque fugiat, odit provident
          maiores sunt corrupti accusamus dolore itaque rem quo libero
          obcaecati. Sed tempora incidunt tenetur, assumenda aperiam placeat
          voluptas dignissimos quisquam neque corrupti, a aut saepe optio atque
          ipsa pariatur facere. Aperiam ratione vel quod earum dolores ab iusto
          eos possimus quis neque tenetur hic velit asperiores recusandae
          incidunt, harum, eveniet reiciendis ipsum! At assumenda velit
          perspiciatis voluptatibus veniam? Impedit perspiciatis cumque, numquam
          dolor vel doloremque debitis sint amet. Aut qui, consectetur illum
          obcaecati, eum veniam beatae minima explicabo iusto rem, magni eius
          quaerat animi quisquam! Consequatur, itaque.
        </p>
        {showLess ? (
          <span
            onClick={() => setShowLess(!showLess)}
            className="cursor-pointer text-secondary"
          >
            ...see more
          </span>
        ) : (
          <span
            onClick={() => setShowLess(!showLess)}
            className="cursor-pointer text-secondary"
          >
            ...see less
          </span>
        )}
      </div>
    </div>
  )
}
