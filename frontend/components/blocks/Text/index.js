import delve from 'dlv';

const Text = ({ text }) => {
    return (
        <p className="ml-10">
            {text}
        </p>
    );
};

Text.defaultProps = {};

export default Text;