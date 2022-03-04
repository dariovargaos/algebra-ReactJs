//treba u funkciji User prikazati sve iz liste

import React from 'react';
export default class NameExercise extends React.Component {
    state = {
        users: [
            { id: 1, name: 'Ivan', years: 30 },
            { id: 2, name: 'Marko', years: 35 },
            { id: 3, name: 'Ana', years: 25 },
        ],
    };
    render() {
        return (
            <div>
                {this.state.users.map(
                    user => <User
                    
                    key={user.id}
                    name={user.name}
                    years={user.years}
                    />
                )}
            </div>
        );
    }
}
function User({name, years}) {
    return (
        <div>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina.
            </p>
        </div>
    );
}