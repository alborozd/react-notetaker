import React from 'react';

class NotesList extends React.Component {
    render() {
        var notes = this.props.notes.map((note, i) => {
           return (
               <li className="list-group-item" key={i}>
                    {note}
               </li>
           ) 
        });
         return (
            <ul className="list-group">
                {notes}
            </ul>  
        );
    }
}
    
export default NotesList;
