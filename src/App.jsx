import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";

export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  useEffect(() => {
    getAllTickets().then((ticketArray) => {
      setAllTickets(ticketArray)
      console.log("tickets set")
    })
  }, [])
    


 

  return( 
    <div className="tickets-container">
      <h2>Tickets</h2>
      <article className="tickets">
        {allTickets.map(ticket => {
          return (
             <section className="ticket" key={ticket.id}>
              <header className="ticket-info">#{ticket.id}</header>
              <div>{ticket.description}</div>
              <footer>
                <div className="ticket-info">Emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </footer>
             </section>
          )
        })}
      </article>
    </div>)
}
