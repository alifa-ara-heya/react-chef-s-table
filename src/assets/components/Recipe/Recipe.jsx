import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    return (
        <div>
            <h3>Recipe</h3>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
};

export default Recipe;