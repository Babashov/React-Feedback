import PropTypes from 'prop-types';

function Button({children,type,version,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
  )
}

Button.defaultProps = {
    version:'primary',
    isDisabled:false,
    type:'button'
}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    type:PropTypes.string.isRequired,
    version:PropTypes.string.isRequired,
    isDisabled:PropTypes.bool.isRequired,
}

export default Button