import PropTypes from 'prop-types';

export default function MultiplePropsComponent({name, years, gender, location, favoriteClub}){

    return(
        <div>
            <p>Pozdrav moje ime {name}, imam {years}. Ja sam {gender}.</p>

            <p>Trenutno se nalazim u gradu koji se zove {location}.
            Najdraži klub mi je {favoriteClub}.</p>

        </div>
        
    );
}

MultiplePropsComponent.propTypes = {
    name: PropTypes.string,
    years: PropTypes.string,
    gender: PropTypes.string,
    location: PropTypes.string,
    favoriteClub: PropTypes.string
}

MultiplePropsComponent.defaultProps = {
    name: "Stranger",
    years: "unknown",
    gender: "unknown",
    location: "Planet Earth",
    favoriteClub: "Supply the props and I will let you know"
}